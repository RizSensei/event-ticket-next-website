import { useRouter } from "next/navigation";
import { ComponentType, useEffect, useState } from "react";

const withProfile = (Component: ComponentType) => {

    const ProfileAuthenticatedComponent = () => {
        const router = useRouter();
        const [isAuth, setIsAuth] = useState(false); 

        useEffect(() => {
            const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
            if(token) {
                setIsAuth(true);
            }else{
                router.push('/');
            }
        }, [router]);

        if(!isAuth){
            return null;
        }

        return <Component />;
    }

  return ProfileAuthenticatedComponent
}

export default withProfile