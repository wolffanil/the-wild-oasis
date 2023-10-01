import { useMutation } from "@tanstack/react-query";
import { singup as singupApi } from "../../services/apiAuth";

import toast from "react-hot-toast";

export function useSingup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: singupApi,

    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's eamil address."
      );
    },
  });

  return {
    signup,
    isLoading,
  };
}
