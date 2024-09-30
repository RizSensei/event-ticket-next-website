import AuthLayout from "@@/app/auth.layout";
import FormikInput from "@@/components/Formik/FormikInput";
import useLogin from "@@/hooks/useLogin";
import { Customer } from "@@/types/auth";
import { loginSchema } from "@@/validation/loginSchema";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";

const Login = () => {
  const { customerLoginMutation } = useLogin();

  const initialValues: Customer = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: Customer,
    { setFieldError, resetForm }: FormikHelpers<Customer>
  ) => {
    // console.log(values);
    try {
      await customerLoginMutation.mutateAsync(values, {
        onSuccess: () => {
          resetForm();
          console.log("Login success");
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
    <AuthLayout title="Login">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
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
                Sign In
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p className="text-xs text-center">
        By continuing, you have read and agree to our Terms and Conditions and
        Privacy Statement.
      </p>
      <p className="mt-5 text-center text-sm text-gray-500">
        Need an account ?&nbsp;
        <Link
          href="/auth/register"
          className="font-semibold leading-6 text-neutral-800"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
