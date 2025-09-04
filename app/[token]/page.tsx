"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const params = useParams<{ token: string }>();
  useEffect(() => {
    const postToken = async () => {
      try {
        const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + '/v1/user/email-verification', {
          token: params?.token,
        });

        if (res?.data?.success) {
          console.log('--------resp success', res)
          return
        }

      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.warn(
            "⚠️ API returned:",
            error.response?.status,
            error.response?.data
          );
        } else {
          console.warn("⚠️ Unexpected error:", error);
        }
      }
    };
    postToken();
  }, [params]);


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      welcome to chordz
    </div>
  );
}
