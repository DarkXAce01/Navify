"use client";
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

const QuizPage = () => {
  const router = useRouter();
  interface PredictResponse {
    careerPath: string;
  }
  // Initialize state to store current question index and answers
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(10).fill(0)); // For storing answer scores
  const [showScore, setShowScore] = useState(false);
  const [careerPath, setCareerPath] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  // List of questions and options
  const questions = [
    {
      question:
        "How comfortable are you with solving complex problems that require logical thinking and analytical skills?",
      options: [
        "Not comfortable",
        "Slightly comfortable",
        "Neutral",
        "Comfortable",
        "Very comfortable",
      ],
    },
    {
      question:
        "Rate your ability to identify subtle differences in data or code that could lead to significant outcomes.",
      options: ["Very poor", "Poor", "Average", "Good", "Excellent"],
    },
    {
      question:
        "How often do you find yourself finding innovative solutions to overcome challenges?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How important is teamwork to you in your working environment?",
      options: [
        "Not important",
        "Slightly important",
        "Neutral",
        "Important",
        "Very important",
      ],
    },
    {
      question:
        "Do you see yourself taking the lead on projects and guiding team members towards objectives?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question:
        "How motivated are you to continuously learn and update your skills, especially in fast-evolving fields like technology?",
      options: [
        "Not motivated",
        "Slightly motivated",
        "Neutral",
        "Motivated",
        "Very motivated",
      ],
    },
    {
      question:
        "How well do you adapt to new technologies and changes in project requirements?",
      options: ["Very poorly", "Poorly", "Average", "Well", "Very well"],
    },
    {
      question:
        "Rate your ability to manage projects, including planning, execution, and deadline management.",
      options: ["Very poor", "Poor", "Average", "Good", "Excellent"],
    },
    {
      question:
        "How interested are you in the theoretical foundations of computing, such as algorithms, data structures, and computation theory?",
      options: [
        "Not interested",
        "Slightly interested",
        "Neutral",
        "Interested",
        "Very interested",
      ],
    },
    {
      question:
        "How important is it for you to improve user experience in the products or services you develop?",
      options: [
        "Not important",
        "Slightly important",
        "Neutral",
        "Important",
        "Very important",
      ],
    },
    {
      question:
        "How skilled are you at documenting your code and writing detailed reports?",
      options: ["Very poor", "Poor", "Average", "Good", "Excellent"],
    },
    {
      question:
        "How important are ethical considerations in your decision-making process, especially when developing new software or systems?",
      options: [
        "Not important",
        "Slightly important",
        "Neutral",
        "Important",
        "Very important",
      ],
    },
    {
      question:
        "Are you interested in working with hardware and Internet of Things (IoT) devices?",
      options: [
        "Not interested",
        "Slightly interested",
        "Neutral",
        "Interested",
        "Very interested",
      ],
    },
    {
      question:
        "How frequently do you use data and analytics to make decisions?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question:
        "How open are you to taking risks, such as trying new technologies or starting new projects?",
      options: ["Not open", "Slightly open", "Neutral", "Open", "Very open"],
    },
  ];

  const handleAnswerOption = (answer: number) => {
    // Set the answer for the current question
    const updatedAnswers = answers.slice();
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  };

  const getReferenceValue = (answer: number) => {
        const referenceValues = [2, 4, 6, 8, 10];
        return referenceValues[answer];
  };

  const handleReferenceOption = (answer: number) => {
        // Generate the reference array with custom values
        const referenceAnswers = answers.map((ans) => getReferenceValue(ans));
        console.log(referenceAnswers); // This array is only for reference
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch(`${process.env.API_BASE_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch career suggestion.");
      }

      const result = await response.json();
      setCareerPath(result.careerPath);
      setShowScore(true);
    } catch (error) {
      console.error("Failed to submit quiz", error);
      alert("Failed to get a career suggestion. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleExportButton = () => {
    if (careerPath == "Web Development") {
      router.push("/roadmaps/webdevelopment");
    }
    if (careerPath == "DevOps") {
      router.push("/roadmaps/devops");
    }
    if (careerPath == "Blockchain") {
      router.push("/roadmaps/blockchain");
    }
    if (careerPath == "Artificial Intelligence") {
      router.push("/roadmaps/ai");
    }
    if (careerPath == "Cybersecurity") {
      router.push("/roadmaps/cybersecurity");
    }
    if (careerPath == "Mobile App Development") {
      router.push("/roadmaps/mobiledevelopment");
    }
    if (careerPath == "Cloud Computing") {
      router.push("/roadmaps/cloudcomputing");
    }
    if (careerPath == "Data Science") {
      router.push("/roadmaps/datascience");
    }
    if (careerPath == "Software Development") {
      router.push("/roadmaps/softwaredevelopment");
    }
    if (careerPath == "Network and Systems Administration") {
      router.push("/roadmaps/networkandadmin");
    }
  };

  return (
    <div className="flex flex-col h-screen from-creme to-lblack">
      <Head>
        <title>Quiz App</title>
        <style jsx global>{`
          html,
          body,
          #__next {
            margin: 0;
            padding: 0;
            overflow: hidden; /* Prevent scrolling on the entire app */
            height: 100%; /* Full height */
          }
          #__next {
            display: flex;
            flex-direction: column;
          }
          .content {
            overflow-y: auto; /* Scroll the content only when necessary */
          }
        `}</style>
      </Head>
      <div
        className={`flex-grow content ${
          showScore ? "items-center" : ""
        } flex flex-col justify-center bg-[#262525] px-5`}
      >
        {!showScore && !isLoading ? (
          <>
            <div className="flex flex-col items-start w-full">
              <h4 className="text-xl text-white/60">
                Question {currentQuestion + 1} of {questions.length}
              </h4>
              <div className="mt-4 text-2xl text-white">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="flex flex-col w-full mt-6">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center w-full py-4 pl-5 my-2 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                  onClick={() => handleAnswerOption(index + 1)}
                >
                  <input
                    type="radio"
                    name={`question_${currentQuestion}_answers`}
                    value={index + 1}
                    onChange={() => handleAnswerOption(index + 1)}
                    checked={index + 1 === answers[currentQuestion]}
                    className="w-6 h-6 bg-black"
                  />
                  <p className="ml-6 text-white">{option}</p>
                </div>
              ))}
            </div>
          </>
        ) : isLoading ? (
          <div className="flex flex-col items-center">
            <ClipLoader color="#E4C7B7" size={50} />
            <p className="mt-4 text-2xl text-white animate-bounce">
              Finding the right career for you...
            </p>
          </div>
        ) : (
          <div className="flex justify-center items-center  bg-lblack">
            <div className="p-10 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <h1 className="text-3xl font-semibold text-center text-lblack mb-3">
                Your Suggested Career Path:
              </h1>
              <p
                className="text-center text-2xl font-bold animate-pulse"
                style={{ color: "#E4C7B7" }}
              >
                {careerPath}
              </p>
              <p className="mt-4 text-gray-600 text-center">
                This path has been suggested based on your answers. Explore
                resources to get started!
              </p>
              <div className="mt-5 text-center">
                <button
                  onClick={handleExportButton}
                  className="bg-creme hover:bg-lblack text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                >
                  Explore Roadmap
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {!showScore && !isLoading && (
        <div className="w-full p-4 bg-[#262525]">
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              className={`w-[49%] py-3 rounded-lg ${
                currentQuestion === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-creme"
              }`}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className={`w-[49%] py-3 rounded-lg ${
                answers[currentQuestion] === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-creme"
              }`}
              disabled={answers[currentQuestion] === 0}
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
