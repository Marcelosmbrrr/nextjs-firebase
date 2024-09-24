import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged,
  confirmPasswordReset,
} from "firebase/auth";

import { auth, db } from "../../config";
import { doc, setDoc } from "firebase/firestore";

import { User } from "firebase/auth";

// Source: https://firebase.google.com/docs/auth/web/start?hl=pt-br

/**
 * Função para verificar o usuário conectado.
 *
 * @return {Promise} Retorna uma Promise que resolve com o usuário autenticado ou rejeita com um erro.
 */
export const getUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("Nenhum usuário autenticado"));
        }
      },
      (error) => {
        reject(new Error("Erro ao verificar usuário: " + error.message));
      }
    );
  });
};

/**
 * Faz login com email e senha.
 *
 * @param {string} email - O email do usuário.
 * @param {string} password - A senha do usuário.
 * @return {Promise} Retorna o usuário autenticado ou lança um erro.
 */
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    throw new Error("Falha ao fazer login: " + error.message);
  }
};

/**
 * Faz login com o Google.
 *
 * @return {Promise} Retorna o usuário autenticado ou lança um erro.
 */
export const loginUserWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const { user } = await signInWithPopup(auth, provider);

    // Armazena os dados do usuário no Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      name: "",
      username: ""
    });

    return user;
  } catch (error: any) {
    throw new Error("Falha ao fazer login com Google: " + error.message);
  }
};

/**
 * Registra um novo usuário no Authentication e Firestore.
 * A função createUserWithEmailAndPassword loga o usuário automaticamente se for bem sucedida.
 *
 * @param {string} email - O email do novo usuário.
 * @param {string} password - A senha do novo usuário.
 * @param {any} userData - Outros dados do usuário que você quer armazenar.
 * @return {Promise} Retorna o usuário registrado ou lança um erro.
 */
export const registerUser = async (email: string, password: string) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Envia um email de verificação
    await sendEmailVerification(user);

    // Verifique se `user.uid` está definido
    if (!user.uid) {
      throw new Error("UID do usuário não encontrado");
    }

    // Armazena os dados do usuário no Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      name: "",
      username: ""
    });

    return user;
  } catch (error: any) {
    console.error("Erro ao registrar usuário: ", error);
    throw new Error("Falha ao registrar: " + error.message);
  }
};

/**
 * Faz logout do usuário.
 *
 * @return {Promise} Retorna true se o logout for bem-sucedido ou lança um erro.
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error: any) {
    throw new Error("Falha ao sair: " + error.message);
  }
};

/**
 * Método de recuperação de senha.
 *
 * @param {string} email - O email do usuário.
 * @return {Promise} Retorna true se o email for enviado com sucesso ou lança um erro.
 */
export const forgetUserPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error: any) {
    throw new Error("Falha ao enviar email de recuperação: " + error.message);
  }
};

/**
 * Método de redefinição de senha.
 *
 * @param {string} oobCode - O código de verificação enviado para o email do usuário.
 * @param {string} newPassword - A nova senha do usuário.
 * @return {Promise} Retorna true se a senha for redefinida com sucesso ou lança um erro.
 */
export const resetUserPassword = async (
  oobCode: string,
  newPassword: string
) => {
  try {
    await confirmPasswordReset(auth, oobCode, newPassword);
    return true;
  } catch (error: any) {
    throw new Error("Falha ao redefinir a senha: " + error.message);
  }
};
