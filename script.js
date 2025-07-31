    const defaultQuestions = {
      easy: [
        { q: "What is 12 * 12?", options: ["121", "100", "145", "144"], answer: "144" },
        { q: "Which is a fruit?", options: ["Carrot", "Apple", "Potato", "Onion"], answer: "Apple" },
        { q: "Who Invented the light bulb?", options: ["Albert Einstein", "Nikola Tesla", "Thomas Edison", "Isaac Newton"], answer: "Thomas Edison" },
        { q: "What is the chemical symbol for water?", options: ["CO₂", "H₂O", "O₂", "HO"], answer: "H₂O" },
        { q: "Which is the smallest prime number?", options: ["6", "3", "5", "2"], answer: "2" },
        { q: "Which country is called the Land of the Rising Sun?", options: ["U.S.A.", "Japan", "South Korea", "Russia"], answer: "Japan" },
        { q: "What is 424 / 2 ?", options: ["220", "200", "112", "212"], answer: "212"},
        { q: "Liverpool is a city from?", options: ["France", "U.S.A.", "England", "Ireland"], answer: "England"}
      ],
      medium: [
        { q: "What is the capital of France?", options: ["Berlin", "Paris", "Madrid", "London"], answer: "Paris" },
        { q: "Who painted Mona Lisa?", options: ["Da Vinci", "Van Gogh", "Picasso", "Rembrandt"], answer: "Da Vinci" },
        { q: "Which of these is NOT a programming language?", options: ["Excel", "Python", "Java", "C#"], answer: "Excel" },
        { q: "Which language is used to style web pages?", options: ["HTML", "Java Script", "MS Word", "CSS"], answer: "CSS" },
        { q: "What car brand is associated with the 'Supra'?", options: ["Acura", "Subaru", "Toyota", "Lamborghini"], answer: "Toyota" },
        { q: "Which planet has the most moons?", options: ["Earth", "Saturn", "Jupiter", "Mars"], answer: "Saturn" },
        { q: "Which brand makes shoes?", options: ["Dell", "Skechers", "Acer", "Asus"], answer: "Skechers"},
        { q: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", " Deoxyribose Nitrogen Acid", "Double Nitrogen Acid", " Dual Nucleic Acid"], answer: "Deoxyribonucleic Acid"},
        { q: "What is the largest Indian company?", options: ["Tata Consultancy Services (TCS)", "Reliance Industries Limited (RIL)", " HDFC Bank", "Infosys"], answer: "Reliance Industries Limited (RIL)"},
        { q: "Which company became the first in the world to reach a market capitalization of $3 trillion?", options: ["Microsoft", "Saudi Aramco", "Apple", "Amazon"], answer: "Apple"},
        { q: "Who was the first Indian to win an individual Olympic gold medal?", options: ["Dhyan Chand", "Abhinav Bhindra"], answer: "Abhinav Bhindra"}
      ],
      hard: [
        { q: "What is He?", options: ["Oxygen", "Hydrogen", "Water", "Helium"], answer: "Helium" },
        { q: "E=mc² is given by?", options: ["Newton", "Einstein", "Tesla", "Bohr"], answer: "Einstein" },
        { q: "Which Person is a Scientist?", options: ["Rick Ashtley", "Jeff Bezos", "Rosland Franklin", "Cristiano Ronaldo"], answer: "Rosland Franklin" },
        { q: "Which is the deepest ocean trench?", options: ["Mariana Trench", "Philippine Trench", "Tonga Trench", "Kermadec Trench"], answer: "Mariana Trench" },
        { q: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"], answer: "Blue Whale" },
        { q: "Which element has the atomic number 1?", options: ["Oxygen", "Hydrogen", "Helium", "Carbon"], answer: "Hydrogen" },
        { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
        { q: "What is the largest desert in the world?", options: ["Sahara", "Arabian", "Gobi", "Kalahari"], answer: "Sahara" },
        { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Platinum"], answer: "Diamond" },
        { q: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Albert Einstein"], answer: "Alexander Fleming" },
        { q: "Who is the father of Geometry?", options: ["Euclid", "Pythagoras", "Archimedes", "Aristotle"], answer: "Euclid" },
        { q: "What is the square root of 169?", options: ["14", "19", "13", "17"], answer: "13" }
      ],
      superhard: [
        { q: "What is the capital of Mongolia?", options: ["Ulaanbaatar", "Astana", "Tashkent", "Bishkek"], answer: "Ulaanbaatar" },
        { q: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Brain"], answer: "Skin" },
        { q: "Who wrote 'The Odyssey'?", options: ["Homer", "Virgil", "Ovid", "Plato"], answer: "Homer" },
        { q: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
        { q: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
        { q: "Who painted 'The Starry Night'?", options: ["Van Gogh", "Monet", "Picasso", "Da Vinci"], answer: "Van Gogh" },
        { q: "Which of these protocols does NOT guarantee data integrity?", options: ["TCP", "UDP", "HTTP", "FTP"], answer: "UDP" },
        { q: "Which programming language first introduced garbage collection?", options: ["C", "Lisp", "Python", "Ruby"], answer: "Lisp" },
        { q: "What is the main ingredient in traditional Italian pesto sauce?", options: ["Basil", "Parsley", "Cilantro", "Mint"], answer: "Basil" },
        { q: "What is the capital of Iceland?", options: ["Reykjavik", "Oslo", "Helsinki", "Stockholm"], answer: "Reykjavik" },
        { q: "What is the main ingredient in traditional Japanese miso soup?", options: ["Soybeans", "Rice", "Seaweed", "Tofu"], answer: "Soybeans" },
        { q: "How does the human body primarily regulate its temperature?", options: ["Sweating", "Shivering", "Breathing", "Digestion"], answer: "Sweating" },
        { q: "What is the heaviest naturally occurring element on Earth?", options: ["Uranium", "Osmium", "Gold", "Lead"], answer: "Uranium" },
        { q: "Which law explains why airplanes fly?", options: ["Newton's First Law", "Bernoulli's Principle", "Archimedes' Principle", "Boyle's Law"], answer: "Bernoulli's Principle" },
        { q: "What is the primary function of red blood cells?", options: ["Transport oxygen", "Fight infections", "Clot blood", "Regulate temperature"], answer: "Transport oxygen" }
      ],
      ridiculous: [
        { q: "Is this the best quiz?", options: ["Yes", "yes", "yeah", "Of course"], answer: "Of course"},
        { q: "Are potatoes the best food in the world?", options: ["Yeah", "No", "Maybe", "Sure..."], answer: "Yeah" },
        { q: "Best color in the world", options: ["Green", "Yellow", "Red", "Blue"], answer: "Green"},
        { q: "Best car in the world", options: ["Lamborghini Huracan", "Nissan 180sx", "Ferrari F40", "Other"], answer: "Nissan 180sx"},
        { q: "Best Operating System (OS)", options: ["Android", "iOS", "Linux", "Windows"], answer: "Windows"},
        { q: "Is this weird?", options: ["Yes", "No", "Slightly", "Yeah"], answer: "Yes"},
        { q: "Do you like the quiz?", options: ["YES!", "No, it's not that good"], answer: "YES!"}
      ]
    };

    let questions = [];
    let currentIndex = 0, score = 0, timer, timeLeft = 60;
    let playerName = "", answersReview = [];

    // Sound creation with Web Audio API for better compatibility
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function createBeep(frequency, duration, volume = 0.3) {
      return new Promise((resolve) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
        
        setTimeout(resolve, duration * 1000);
      });
    }

    function playCorrectSound() {
      createBeep(800, 0.2, 0.3).then(() => createBeep(1000, 0.2, 0.3));
    }

    function playWrongSound() {
      createBeep(800, 0.5, 0.3);
    }

    function playTimeUpSound() {
      createBeep(5000, 0.3, 0.3)
        .then(() => createBeep(5000, 0.3, 0.3))
        .then(() => createBeep(5000, 0.4, 0.3));
    }

    // Elements
    const startBtn = document.getElementById("start-btn");
    const playerInput = document.getElementById("player-name");
    const difficultySelect = document.getElementById("difficulty");
    const fileUpload = document.getElementById("file-upload");
    const quizSection = document.getElementById("quiz-section");
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");
    const timerEl = document.getElementById("timer");
    const progressEl = document.getElementById("progress");
    const resultSection = document.getElementById("result-section");
    const finalScoreEl = document.getElementById("final-score");
    const leaderboardEl = document.getElementById("leaderboard");
    const historyEl = document.getElementById("history");
    const reviewBtn = document.getElementById("review-btn");
    const reviewSection = document.getElementById("review-section");
    const reviewList = document.getElementById("review-list");

    // Theme Switch
    document.querySelectorAll("#theme-switch button").forEach(btn => {
      btn.onclick = () => {
        document.body.className = btn.dataset.theme;
        // Add some visual feedback
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => btn.style.transform = '', 150);
      };
    });

    // Start Quiz
    startBtn.onclick = () => {
      playerName = playerInput.value.trim();
      if (!playerName) {
        playerInput.focus();
        playerInput.style.borderColor = '#f44336';
        setTimeout(() => playerInput.style.borderColor = '', 2000);
        return alert("Enter your name!");
      }

      const difficulty = difficultySelect.value;
      questions = [...defaultQuestions[difficulty]]; // Create a copy
      
      if (fileUpload.files.length > 0) {
        const reader = new FileReader();
        reader.onload = e => {
          try { 
            const customQuestions = JSON.parse(e.target.result);
            if (Array.isArray(customQuestions) && customQuestions.length > 0) {
              questions = customQuestions;
            }
          } catch (error) { 
            alert("Invalid JSON file. Using default questions."); 
          }
          initQuiz();
        };
        reader.readAsText(fileUpload.files[0]);
      } else {
        initQuiz();
      }
    };

    function initQuiz() {
      // Enable audio context on user interaction
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      
      document.getElementById("start-section").classList.add("hidden");
      quizSection.classList.remove("hidden");
      questions = shuffle(questions);
      currentIndex = 0; 
      score = 0; 
      answersReview = [];

      // Set timer based on difficulty
      const timers = {
        easy: 60,
        medium: 70,
        hard: 80,
        superhard: 90,
        ridiculous: 60
      };
      timeLeft = timers[difficultySelect.value] || 60;

      updateTimer();
      timer = setInterval(updateTimer, 1000);
      loadQuestion();
    }

    function loadQuestion() {
      if (currentIndex >= questions.length) {
        endQuiz();
        return;
      }

      const qObj = questions[currentIndex];
      questionEl.textContent = qObj.q;
      optionsEl.innerHTML = "";
      
      shuffle([...qObj.options]).forEach(opt => {
        const div = document.createElement("div");
        div.textContent = opt;
        div.classList.add("option");
        div.onclick = () => selectOption(div);
        optionsEl.appendChild(div);
      });
      
      nextBtn.disabled = true;
      progressEl.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
    }

    function selectOption(selected) {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      selected.classList.add("selected");
      nextBtn.disabled = false;
    }

    nextBtn.onclick = () => {
    const selected = document.querySelector(".selected");
    if (!selected) return;

    // Disable the button to prevent multiple clicks
    nextBtn.disabled = true;

    const correct = questions[currentIndex].answer;
    const isCorrect = selected.textContent === correct;
    
    answersReview.push({
        question: questions[currentIndex].q,
        selected: selected.textContent,
        correct,
        isCorrect
    });

    if (isCorrect) {
        score++;
        playCorrectSound();
        selected.style.boxShadow = '0 0 20px #4caf50';
    } else {
        playWrongSound();
        selected.style.boxShadow = '0 0 20px #f44336';
        document.querySelectorAll('.option').forEach(opt => {
            if (opt.textContent === correct) {
                opt.style.background = '#4caf50';
                opt.style.color = '#fff';
            }
        });
    }

    // Delay before moving to next question
    setTimeout(() => {
        currentIndex++;
        if (currentIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
        // Re-enable the button after the delay
        nextBtn.disabled = false;
    }, 1500);
}; 
    function updateTimer() {
      timerEl.textContent = `Time Left: ${timeLeft}s`;
      
      // Change timer color based on remaining time
      if (timeLeft <= 10) {
        timerEl.style.color = '#f44336';
        timerEl.style.animation = 'pulse 1s infinite';
      } else if (timeLeft <= 30) {
        timerEl.style.color = '#ff9800';
      }
      
      if (timeLeft <= 0) {
        clearInterval(timer);
        playTimeUpSound();
        endQuiz();
        return;
      }
      timeLeft--;
    }

    function endQuiz() {
      clearInterval(timer);
      quizSection.classList.add("hidden");
      resultSection.classList.remove("hidden");
      
      const percentage = Math.round((score / questions.length) * 100);
      finalScoreEl.innerHTML = `
        <strong>${playerName}</strong><br>
        Score: ${score}/${questions.length} (${percentage}%)<br>
        ${percentage >= 80 ? '🏆 Excellent!' : percentage >= 60 ? '👍 Good job!' : '📗 Keep practicing!'}
      `;
      
      updateLeaderboard();
      updateHistory();
    }

    function updateLeaderboard() {
      let leaderboard = [];
      try {
        leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      } catch (e) {
        leaderboard = [];
      }
      
      leaderboard.push({ 
        name: playerName, 
        score, 
        total: questions.length,
        percentage: Math.round((score / questions.length) * 100)
      });
      
      leaderboard.sort((a, b) => b.percentage - a.percentage || b.score - a.score);
      leaderboard = leaderboard.slice(0, 5);
      
      try {
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
      } catch (e) {
        console.warn("Could not save to localStorage");
      }
      
      leaderboardEl.innerHTML = leaderboard.map((e, i) => 
        `<li>#${i + 1} ${e.name} - ${e.score}/${e.total} (${e.percentage}%)</li>`
      ).join("");
    }

    function updateHistory() {
      let history = [];
      try {
        history = JSON.parse(localStorage.getItem("history")) || [];
      } catch (e) {
        history = [];
      }
      
      history.push({ 
        name: playerName, 
        score, 
        total: questions.length,
        date: new Date().toLocaleString() 
      });
      
      try {
        localStorage.setItem("history", JSON.stringify(history));
      } catch (e) {
        console.warn("Could not save to localStorage");
      }
      
      historyEl.innerHTML = history.slice(-5).map(h => 
        `<li>${h.name}: ${h.score}/${h.total} (${h.date})</li>`
      ).join("");
    }

    reviewBtn.onclick = () => {
      resultSection.classList.add("hidden");
      reviewSection.classList.remove("hidden");
      
      reviewList.innerHTML = answersReview.map((ans, index) => {
        const statusIcon = ans.isCorrect ? '✅' : '❌';
        const statusClass = ans.isCorrect ? 'correct' : 'incorrect';
        
        return `
          <p class="${statusClass}">
            <strong>Q${index + 1}:</strong> ${ans.question}<br>
            <strong>Your Answer:</strong> ${ans.selected} ${statusIcon}<br>
            <strong>Correct Answer:</strong> ${ans.correct}
            ${!ans.isCorrect ? '<br><em>Review this topic!</em>' : ''}
          </p>
        `;
      }).join("");
    };

    function restartQuiz() {
      resultSection.classList.add("hidden");
      reviewSection.classList.add("hidden");
      document.getElementById("start-section").classList.remove("hidden");
      
      // Reset form
      playerInput.value = "";
      difficultySelect.value = "easy";
      fileUpload.value = "";
      
      // Reset timer styling
      timerEl.style.color = '#57b609';
      timerEl.style.animation = '';
    }

    function goToStart() {
      reviewSection.classList.add("hidden");
      document.getElementById("start-section").classList.remove("hidden");
      
      // Reset form
      playerInput.value = "";
      difficultySelect.value = "easy";
      fileUpload.value = "";
    }

    function shuffle(arr) {
      const newArr = [...arr];
      for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
    }

    // Add pulse animation for timer
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      .correct {
        border-left: 4px solid #4caf50 !important;
        background: rgba(76, 175, 80, 0.1) !important;
      }
      
      .incorrect {
        border-left: 4px solid #f44336 !important;
        background: rgba(244, 67, 54, 0.1) !important;
      }
    `;
    document.head.appendChild(style);

    // Load leaderboard and history on page load
    window.addEventListener('load', () => {
      updateLeaderboard();
      updateHistory();
    });

    // Add keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (!document.getElementById("start-section").classList.contains('hidden')) {
          startBtn.click();
        } else if (!quizSection.classList.contains('hidden') && !nextBtn.disabled) {
          nextBtn.click();
        }
      }
      
      // Number keys for option selection
      if (!quizSection.classList.contains('hidden')) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 4) {
          const options = document.querySelectorAll('.option');
          if (options[num - 1]) {
            selectOption(options[num - 1]);
          }
        }
      }
    });

    // Auto-focus name input on load
    window.addEventListener('load', () => {
      playerInput.focus();
    });