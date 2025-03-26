"use client";
import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67e41fba0d126f190919544f/1in9hnt0p";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null; // This component only injects the script
};

export default TawkToWidget;
