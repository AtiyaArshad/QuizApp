import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './index.css';

const UserData = () => {
  const userId = useSelector((state) => state.user);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API call to fetch user data
    fetch('https://quiz-leyt.onrender.com/email')
      .then((response) => response.json())
      .then((data) => {
        const foundUser = data.find((user) => user.user === userId);
        if (foundUser) {
          setUserData(foundUser);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div>
      {loading ? (
        <p>Loading user data...</p>
      ) : (
        userData ? (
          <div>
            {userData.data.map((question, index) => (
              <div key={question.id} className="question">
                {/* Display Question Number */}
                <h3>Question {index + 1}</h3>

                {/* Display Attempt Status */}
                <p className={userData.selectedOptions[question.id - 1] === null ? 'ntatt' : 'att'}>
                  {userData.selectedOptions[question.id - 1] === null
                    ? 'NOT ATTEMPTED'
                    : 'ATTEMPTED'}
                </p>

                {/* Display Question Text */}
                <p>{question.question}</p>

                {/* Display Options */}
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    style={{
                      backgroundColor: option === question.correct_answer
                        ? '#11b431' // Green for correct answer
                        : option === userData.selectedOptions[question.id - 1]
                          ? '#ca2e20' // Red for user's incorrect selection
                          : 'white', // Default background
                      padding: '1.2rem',
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p>User data not found.</p>
        )
      )}
    </div>
  );
};

export default UserData;
