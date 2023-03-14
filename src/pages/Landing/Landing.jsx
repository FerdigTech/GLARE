import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const Landing = () => {
  const history = useNavigate();

  const handleClick = () => {
    history("/new-projects");
  };

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const secret = urlParams.get('secret');

  const verificationEmail = async () => {
    console.log("insideee function----")

    let promise = await api.updateVerification(userId, secret);

    promise.then(function (response) {
      console.log("User is verified---------------",response); // Success
      //   navigate('/reset-password');
    }, function (error) {
      console.log("Verification failed--------------",error); // Failure
    });

  };

  verificationEmail();


  return (
    <>
      <section className="container flex h-screen mx-auto">
        <div className="flex flex-col justify-center p-6 mx-auto text-center">
          <p className="my-8 text-xl font-medium md:text-2xl lg:text-3xl">
            Glare
          </p>
          <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl">
            AR/VR Tour Builder
          </h1>

          <button
            onClick={handleClick}
            className="px-10 py-3 mx-auto mt-4 text-lg font-semibold text-gray-900 bg-white border border-gray-900 rounded-lg shadow-md lg:py-5 lg:px-24 md:text-2xl hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
          >
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Landing;
