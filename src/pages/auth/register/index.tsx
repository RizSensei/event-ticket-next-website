import AuthLayout from "@@/app/auth.layout";
import FormikInput from "@@/components/Formik/FormikInput";
import useRegister from "@@/hooks/useRegister";
import { Customer } from "@@/types/auth";
import { registerSchema } from "@@/validation/registerSchema";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import toast from "react-hot-toast";

const Register = () => {
  const { customerRegisterMutation } = useRegister();

  const initialValues: Customer = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: Customer,
    { setFieldError, resetForm }: FormikHelpers<Customer>
  ) => {
    try {
      await customerRegisterMutation.mutateAsync(values, {
        onSuccess: () => {
          resetForm();
          toast.success("Registration successfull");
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
          const response = error.response.data.errors;
          if (response && typeof response === "object") {
            Object.entries(response).forEach(([key, value]) => {
              setFieldError(key, value?.toString());
            });
          }
        },
      });
    } catch (err) {
      console.error("Unhandled exception:", err);
    }
  };

  return (
    <AuthLayout title="Register">
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form>
            <FormikInput
              label="Full Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              touched={touched.name}
            />
            <FormikInput
              label="Email Address"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />
            <FormikInput
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
            />

            <div className="mt-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-neutral-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
              >
                Sign up
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <p className="text-xs text-center">
        By continuing, you have read and agree to our Terms and Conditions and
        Privacy Statement.
      </p>
      <p className="mt-2 text-center text-sm text-gray-500">
        Already have an account ?&nbsp;
        <Link
          href="/auth/login"
          className="font-semibold leading-6 text-neutral-800"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
