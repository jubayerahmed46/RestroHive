function PhoneNumber() {
  const phoneNumber = "+88 0192345678910";

  return (
    <div className="bg-black text-white text-center py-12 mt-14 ">
      <p className="text-2xl font-medium">
        Call Us:{" "}
        <span className="wavy-effect space-x-1">
          {phoneNumber.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block animate-wave"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </span>
      </p>
    </div>
  );
}

export default PhoneNumber;
