import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../../config";

const LoginAuth = () => {
  const navigate = useNavigate();

  const handleAuthStateChange = async (event) => {
    if (event === "SIGNED_IN") {
      navigate("/home");
    }
  };

  supabase.auth.onAuthStateChange(handleAuthStateChange);

  return (
    <section className="py-8">
      <div className="mx-auto mt-8 max-w-xl px-8">
        <h1 className="mb-8 bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text font-heading text-3xl font-bold text-transparent">
          Welcome to Wavify - Your Podcast Oasis
        </h1>
        <Auth
          supabaseClient={supabase}
          appearance={{
            variables: {
              default: {
                colors: {
                  brand: "#ff0000",
                  brandAccent: "#272727",
                  brandButtonText: "#F1F1F1",
                },
              },
            },
            style: {
              button: {
                paddingBlock: "0.75rem",
                marginBottom: "0.5rem",
                borderRadius: "0.375rem",
              },
              label: {
                marginBottom: "0.5rem",
                fontWeight: "700",
                fontSize: "0.875rem",
              },
              input: { padding: "0.75rem", borderRadius: "0.375rem" },
              loader: { color: "#ff0000", background: "transparent" },
            },
          }}
          providers={["google", "github"]}
        />
      </div>
    </section>
  );
};

export default LoginAuth;
