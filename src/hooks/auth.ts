import useSWR from "swr";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  getUser,
  loginUser,
  loginUserWithGoogle,
  logoutUser,
  registerUser,
  resetUserPassword,
  forgetUserPassword,
} from "@/lib/firebase/actions/auth/auth";

interface AuthProps {
  middleware: string;
  redirectIfAuthenticated?: string;
}

type setErrors = (errors: string[]) => void;
type setStatus = (status: string | null) => void;
type setIsLoading = (status: boolean) => void;

interface RegisterProps {
  email: string;
  password: string;
  setErrors: setErrors;
  setStatus?: setStatus;
  setIsLoading: setIsLoading;
}

interface LoginProps {
  email: string;
  password: string;
  setErrors: setErrors;
  setStatus?: setStatus;
  setIsLoading: setIsLoading;
}

interface LoginOAuth2 {
  setErrors: setErrors;
  setStatus?: setStatus;
  setIsLoading: setIsLoading;
}

interface ForgotPasswordProps {
  email: string;
  setErrors: setErrors;
  setStatus?: setStatus;
  setIsLoading: setIsLoading;
}

interface ResetPasswordProps {
  oobCode: string;
  newPassword: string;
  setErrors: setErrors;
  setStatus?: setStatus;
  setIsLoading: setIsLoading;
}

export const useAuth = (
  { middleware, redirectIfAuthenticated }: AuthProps = {} as AuthProps
) => {
  const router = useRouter();
  const params = useParams();

  const { data: user, error, mutate, isValidating } = useSWR("user", getUser);

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user) {
      router.push(redirectIfAuthenticated);
    }
    if (middleware === "auth" && error && !user) {
      logout();
    }
  }, [user, error]);

  const register = async ({
    email,
    password,
    setErrors,
    setStatus,
    setIsLoading,
  }: RegisterProps): Promise<void> => {
    setErrors([]);
    setIsLoading(true);
    try {
      await registerUser(email, password);
    } catch (error: any) {
      setErrors([error.message]);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async ({
    email,
    password,
    setErrors,
    setStatus,
    setIsLoading,
  }: LoginProps): Promise<void> => {
    setErrors([]);
    setIsLoading(true);
    if (setStatus) setStatus(null);
    try {
      await loginUser(email, password);
    } catch (error: any) {
      setErrors([error.message]);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async ({
    setErrors,
    setStatus,
    setIsLoading,
  }: LoginOAuth2): Promise<void> => {
    setErrors([]);
    setIsLoading(true);
    if (setStatus) setStatus(null);
    try {
      await loginUserWithGoogle();
    } catch (error: any) {
      setErrors([error.message]);
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async ({
    email,
    setErrors,
    setStatus,
    setIsLoading,
  }: ForgotPasswordProps): Promise<void> => {
    setErrors([]);
    setIsLoading(true);
    if (setStatus) setStatus(null);
    try {
      await forgetUserPassword(email);
      if (setStatus) setStatus("Email de recuperação enviado com sucesso.");
    } catch (error: any) {
      setErrors([error.message]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async ({
    oobCode,
    newPassword,
    setErrors,
    setStatus,
    setIsLoading,
  }: ResetPasswordProps): Promise<void> => {
    setErrors([]);
    setIsLoading(true);
    if (setStatus) setStatus(null);
    try {
      await resetUserPassword(oobCode, newPassword);
      if (setStatus) setStatus("Senha redefinida com sucesso.");
    } catch (error: any) {
      setErrors([error.message]);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    if (!error) {
      await logoutUser();
      await mutate(null, false); // Defina o estado do usuário como `null` sem refazer a requisição.
    }
    router.push("/login");
  };

  return {
    user,
    isValidating,
    register,
    login,
    loginWithGoogle,
    forgotPassword,
    resetPassword,
    logout,
  };
};
