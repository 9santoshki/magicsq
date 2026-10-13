import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen p-5 bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] font-sans">
      <div className="max-w-[800px] mx-auto overflow-hidden rounded-xl border border-[#dee2e6] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        {/* Header with Logo */}
        <div className="border-b border-[#e9ecef] bg-[#f8f9fa] p-[30px] text-center">
          <div className="mb-[10px] flex items-center justify-center gap-[15px]">
            <img
              src="/magicsqlogo.png"
              alt="Magic Square Logo"
              className="h-[60px] w-[60px] rounded-lg"
            />
            <h1 className="m-0 text-[2.5rem] font-bold text-[#2c3e50] [text-shadow:0_2px_4px_rgba(0,0,0,0.1)]">
              Magic Square
            </h1>
          </div>
          <p className="m-0 text-[1.3rem] font-semibold tracking-[0.5px] text-[#495057]">
            Boost your Brainpower!
          </p>
        </div>

        {/* Content */}
        <div className="p-10 leading-[1.8] text-[#495057]">
          <h2 className="mb-5 text-[1.8rem] font-semibold text-[#2c3e50]">
            About Magic Square
          </h2>

          <p className="mb-[25px] text-[1.1rem]">
            Welcome to Magic Square, the ultimate mathematical puzzle challenge that combines the power of BODMAS (Brackets, Orders, Division/Multiplication, Addition/Subtraction) with strategic thinking and problem-solving skills.
          </p>

          <h3 className="mb-[15px] text-[1.4rem] font-semibold text-[#2c3e50]">
            What is BODMAS?
          </h3>

          <p className="mb-[25px] text-base">
            BODMAS is the mathematical order of operations that ensures calculations are performed correctly. In Magic Square, you'll apply these rules to solve complex equation puzzles where every number placement matters.
          </p>

          <h3 className="mb-[15px] text-[1.4rem] font-semibold text-[#2c3e50]">
            How to Play
          </h3>

          <ul className="mb-[25px] pl-5 text-base">
            <li className="mb-2">Fill empty cells with digits 1-9 to complete mathematical equations</li>
            <li className="mb-2">Each digit can appear only once per row or column equation</li>
            <li className="mb-2">All digits 1-9 must be used at least once in the puzzle</li>
            <li className="mb-2">Follow BODMAS rules: solve left to right in rows, top to bottom in columns</li>
          </ul>

          <h3 className="mb-[15px] text-[1.4rem] font-semibold text-[#2c3e50]">
            Challenge Yourself
          </h3>

          <p className="mb-[25px] text-base">
            With varying difficulty levels from 1 to 5 stars, Magic Square offers puzzles for everyone from beginners to mathematical experts. Track your solving time, share your achievements, and return daily for new challenges!
          </p>

          <div className="mt-[30px] rounded-lg border border-[#bbdefb] bg-[#e3f2fd] p-5">
            <h4 className="mb-[10px] text-[1.2rem] font-semibold text-[#1976d2]">
              Connect with us
            </h4>
            <p className="m-0 text-base text-[#1565c0]">
              Join our community of puzzle enthusiasts and mathematical minds. Share your solving strategies, compete with friends, and discover the joy of mathematical thinking!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
