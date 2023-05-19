"use client";
import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    fetch("http://ipwho.is/?fields=country")
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  return <div>{country}</div>;
}
