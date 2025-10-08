document.addEventListener("DOMContentLoaded", () => {
  // PWA Service Worker Registration & Install Button Logic
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service Worker registered: ", registration);
        })
        .catch((registrationError) => {
          console.log(
            "Service Worker registration failed: ",
            registrationError
          );
        });
    });
  }

  let deferredPrompt;
  const installButton = document.getElementById("install-button");

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can install the PWA
    if (installButton) {
      installButton.style.display = "block";
    }
  });

  if (installButton) {
    installButton.addEventListener("click", async () => {
      // Hide the install button
      installButton.style.display = "none";
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      // We've used the prompt, and can't use it again, throw it away
      deferredPrompt = null;
    });
  }

  // --- QUESTION DATA ---
  const allQuestions = {
    general: {
      title: "ಸಾಮಾನ್ಯ ಜ್ಞಾನ",
      questions: [
        {
          question: "ಕರ್ನಾಟಕ ರಾಜ್ಯದ ರಾಜಧಾನಿ ಯಾವುದು?",
          options: ["ಮೈಸೂರು", "ಬೆಂಗಳೂರು", "ಹುಬ್ಬಳ್ಳಿ", "ಮಂಗಳೂರು"],
          answer: "ಬೆಂಗಳೂರು",
        },
        {
          question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಹೂವು ಯಾವುದು?",
          options: ["ಗುಲಾಬಿ", "ಕಮಲ", "ಸೂರ್ಯಕಾಂತಿ", "ಮಲ್ಲಿಗೆ"],
          answer: "ಕಮಲ",
        },
        {
          question: "ಕುವೆಂಪು ಅವರ ಪೂರ್ಣ ಹೆಸರು ಏನು?",
          options: [
            "ಕುಪ್ಪಳ್ಳಿ ವೆಂಕಟಪ್ಪ ಪುಟ್ಟಪ್ಪ",
            "ಕುವೆಂಪು ರಾಘವಾಚಾರ್",
            "ಕೃಷ್ಣಪ್ಪ ವೆಂಕಟಪ್ಪ",
            "ಯಾವುದೂ ಅಲ್ಲ",
          ],
          answer: "ಕುಪ್ಪಳ್ಳಿ ವೆಂಕಟಪ್ಪ ಪುಟ್ಟಪ್ಪ",
        },
        {
          question: "ಭಾರತದ ಪ್ರಥಮ ಪ್ರಧಾನಿ ಯಾರು?",
          options: [
            "ಮಹಾತ್ಮ ಗಾಂಧಿ",
            "ಸರ್ದಾರ್ ಪಟೇಲ್",
            "ಜವಾಹರಲಾಲ್ ನೆಹರು",
            "ಇಂದಿರಾ ಗಾಂಧಿ",
          ],
          answer: "ಜವಾಹರಲಾಲ್ ನೆಹರು",
        },
        {
          question: "ವಿಶ್ವದಲ್ಲಿ ಅತಿ ಎತ್ತರದ ಪರ್ವತ ಯಾವುದು?",
          options: ["ಕೆ೨", "ಕಾಂಚನಜುಂಗಾ", "ಮೌಂಟ್ ಎವರೆಸ್ಟ್", "ಆಲ್ಪ್ಸ್"],
          answer: "ಮೌಂಟ್ ಎವರೆಸ್ಟ್",
        },
        {
          question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪ್ರಾಣಿ ಯಾವುದು?",
          options: ["ಸಿಂಹ", "ಆನೆ", "ಹುಲಿ", "ಚಿರತೆ"],
          answer: "ಹುಲಿ",
        },
        {
          question: "ಕರ್ನಾಟಕದ ಯಾವ ನಗರವನ್ನು 'ಅರಮನೆಗಳ ನಗರ' ಎಂದು ಕರೆಯುತ್ತಾರೆ?",
          options: ["ಬೆಂಗಳೂರು", "ಮೈಸೂರು", "ಬೆಳಗಾವಿ", "ಹಾಸನ"],
          answer: "ಮೈಸೂರು",
        },
        {
          question: "ಗಣಿತಶಾಸ್ತ್ರದಲ್ಲಿ 'ಪೈ' (π) ಯ ಮೌಲ್ಯವೆಷ್ಟು?",
          options: ["3.14", "2.14", "4.13", "3.00"],
          answer: "3.14",
        },
        {
          question: "ಭಾರತದ ರಾಷ್ಟ್ರಪಿತ ಯಾರು?",
          options: [
            "ಭಗತ್ ಸಿಂಗ್",
            "ಸುಭಾಷ್ ಚಂದ್ರ ಬೋಸ್",
            "ಮಹಾತ್ಮ ಗಾಂಧಿ",
            "ಡಾ. ಅಂಬೇಡ್ಕರ್",
          ],
          answer: "ಮಹಾತ್ಮ ಗಾಂಧಿ",
        },
        {
          question: "ಸೌರವ್ಯೂಹದಲ್ಲಿ ಎಷ್ಟು ಗ್ರಹಗಳಿವೆ?",
          options: ["7", "8", "9", "10"],
          answer: "8",
        },
        {
          question: "ಕನ್ನಡ ವರ್ಣಮಾಲೆಯಲ್ಲಿ ಎಷ್ಟು ಅಕ್ಷರಗಳಿವೆ?",
          options: ["48", "50", "49", "52"],
          answer: "49",
        },
        {
          question: "ಭಾರತದ ಅತ್ಯಂತ ಉದ್ದವಾದ ನದಿ ಯಾವುದು?",
          options: ["ಯಮುನಾ", "ಗೋದಾವರಿ", "ಗಂಗಾ", "ಕಾವೇರಿ"],
          answer: "ಗಂಗಾ",
        },
        {
          question: "ಯಾವ ಹಬ್ಬವನ್ನು 'ಬೆಳಕಿನ ಹಬ್ಬ' ಎಂದು ಕರೆಯುತ್ತಾರೆ?",
          options: ["ಯುಗಾದಿ", "ದಸರಾ", "ದೀಪಾವಳಿ", "ಸಂಕ್ರಾಂತಿ"],
          answer: "ದೀಪಾವಳಿ",
        },
        {
          question: "ತಾಜ್ ಮಹಲ್ ಅನ್ನು ಯಾರು ನಿರ್ಮಿಸಿದರು?",
          options: ["ಅಕ್ಬರ್", "ಬಾಬರ್", "ಷಹಜಹಾನ್", "ಔರಂಗಜೇಬ್"],
          answer: "ಷಹಜಹಾನ್",
        },
        {
          question: "ಮಾನವನ ದೇಹದಲ್ಲಿರುವ ಅತಿ ದೊಡ್ಡ ಅಂಗ ಯಾವುದು?",
          options: ["ಹೃದಯ", "ಮಿದುಳು", "ಯಕೃತ್ತು", "ಚರ್ಮ"],
          answer: "ಚರ್ಮ",
        },
      ],
    },
    science: {
      title: "ವಿಜ್ಞಾನ",
      questions: [
        {
          question: "ಮಾನವ ದೇಹದಲ್ಲಿ ಅತಿ ದೊಡ್ಡ ಅಂಗ ಯಾವುದು?",
          options: ["ಯಕೃತ್ತು", "ಹೃದಯ", "ಚರ್ಮ", "ಬೆನ್ನುಮೂಳೆ"],
          answer: "ಯಕೃತ್ತು",
        },
        {
          question: "ಜಲದ ರಾಸಾಯನಿಕ ಸೂತ್ರ ಯಾವುದು?",
          options: ["H2O", "CO2", "O2", "NaCl"],
          answer: "H2O",
        },
        {
          question: "ಸೂರ್ಯನಿಗೆ ಹತ್ತಿರದ ಗ್ರಹ ಯಾವುದು?",
          options: ["ಭೂಮಿ", "ಬುಧ", "ಶುಕ್ರ", "ಮಂಗಳ"],
          answer: "ಬುಧ",
        },
        {
          question: "ಸಸ್ಯಗಳು ತಮ್ಮ ಆಹಾರವನ್ನು ಹೇಗೆ ತಯಾರಿಸುತ್ತವೆ?",
          options: [
            "ಉಸಿರಾಟ",
            "ಪ್ರಕಾಶ ಸಂಶ್ಲೇಷಣೆ",
            "ಭೂಮಿಯಿಂದ ಹೀರಿಕೊಳ್ಳುವುದು",
            "ಇತರ ಜೀವಿಗಳನ್ನು ತಿನ್ನುವುದು",
          ],
          answer: "ಪ್ರಕಾಶ ಸಂಶ್ಲೇಷಣೆ",
        },
        {
          question: "ವಿದ್ಯುತ್ ಬಲ್ಬಿನಲ್ಲಿ ಬಳಸುವ ಅನಿಲ ಯಾವುದು?",
          options: ["ಆರ್ಗಾನ್", "ಹೈಡ್ರೋಜನ್", "ಆಮ್ಲಜನಕ", "ನೈಟ್ರೋಜನ್"],
          answer: "ಆರ್ಗಾನ್",
        },
        {
          question:
            "ಭೂಮಿಯ ಒಂದು ಭಾಗದಲ್ಲಿ ದಿನ ಇದ್ದಾಗ ಇನ್ನೊಂದು ಭಾಗದಲ್ಲಿ ಏನಾಗುತ್ತದೆ?",
          options: ["ದಿನ", "ರಾತ್ರಿ", "ಹಗಲು-ರಾತ್ರಿ", "ಯಾವುದೂ ಅಲ್ಲ"],
          answer: "ರಾತ್ರಿ",
        },
        {
          question: "ಮಳೆಯು ಹೇಗೆ ಉಂಟಾಗುತ್ತದೆ?",
          options: ["ನದಿಗಳಿಂದ", "ಸಾಗರಗಳಿಂದ", "ಮೋಡಗಳಿಂದ", "ಪರ್ವತಗಳಿಂದ"],
          answer: "ಮೋಡಗಳಿಂದ",
        },
        {
          question: "ಕನ್ನಡಿಯಲ್ಲಿ ನಮ್ಮ ಪ್ರತಿಬಿಂಬ ಹೇಗೆ ಕಾಣಿಸುತ್ತದೆ?",
          options: ["ತಲೆಕೆಳಗೆ", "ಎಡದಿಂದ ಬಲಕ್ಕೆ", "ಬಲದಿಂದ ಎಡಕ್ಕೆ", "ಒಂದೇ ರೀತಿ"],
          answer: "ಬಲದಿಂದ ಎಡಕ್ಕೆ",
        },
        {
          question: "ಭೂಕಂಪ ಏಕೆ ಉಂಟಾಗುತ್ತದೆ?",
          options: [
            "ಭೂಮಿಯ ಒಳಭಾಗದಲ್ಲಿನ ಚಲನೆ",
            "ಮಳೆಯಿಂದ",
            "ಗಾಳಿಯಿಂದ",
            "ಸೂರ್ಯನಿಂದ",
          ],
          answer: "ಭೂಮಿಯ ಒಳಭಾಗದಲ್ಲಿನ ಚಲನೆ",
        },
        {
          question: "ರಕ್ತದ ಕೆಂಪು ಬಣ್ಣಕ್ಕೆ ಕಾರಣವೇನು?",
          options: ["ಹಿಮೋಗ್ಲೋಬಿನ್", "ಕ್ಲೋರೊಫಿಲ್", "ಮೆಲನಿನ್", "ಯಾವುದೂ ಅಲ್ಲ"],
          answer: "ಹಿಮೋಗ್ಲೋಬಿನ್",
        },
        {
          question: "ಗುರುತ್ವಶಕ್ತಿಯನ್ನು ಕಂಡುಹಿಡಿದವರು ಯಾರು?",
          options: [
            "ಐಸಾಕ್ ನ್ಯೂಟನ್",
            "ಅಲ್ಬರ್ಟ್ ಐನ್‌ಸ್ಟೀನ್",
            "ಗೆಲಿಲಿಯೋ ಗೆಲಿಲಿ",
            "ಲಿಯೊನಾರ್ಡೊ ಡಾ ವಿನ್ಸಿ",
          ],
          answer: "ಐಸಾಕ್ ನ್ಯೂಟನ್",
        },
        {
          question: "ಮಾನವ ದೇಹದಲ್ಲಿನ ನಿಯಂತ್ರಣ ಕೇಂದ್ರ ಯಾವುದು?",
          options: ["ಹೃದಯ", "ಮಿದುಳು", "ಯಕೃತ್ತು", "ಶ್ವಾಸಕೋಶ"],
          answer: "ಮಿದುಳು",
        },
        {
          question: "ಸೂರ್ಯನು ಯಾವ ರೀತಿಯ ನಕ್ಷತ್ರ?",
          options: ["ನೀಹಾರಿಕೆ", "ಉಲ್ಕೆ", "ನಕ್ಷತ್ರಪುಂಜ", "ನಕ್ಷತ್ರ"],
          answer: "ನಕ್ಷತ್ರ",
        },
        {
          question: "ಪ್ಲಾಸ್ಟಿಕ್ ಯಾವ ರೀತಿಯ ವಸ್ತು?",
          options: ["ಲೋಹ", "ಲೋಹವಲ್ಲದ್ದು", "ಕೃತಕ ವಸ್ತು", "ನೈಸರ್ಗಿಕ ವಸ್ತು"],
          answer: "ಕೃತಕ ವಸ್ತು",
        },
        {
          question: "ಮಳೆಗುಡ್ಡೆ ಯಾವ ರೀತಿಯ ವಿದ್ಯುತ್ ಉತ್ಪಾದನೆಗೆ ಬಳಸಲಾಗುತ್ತದೆ?",
          options: [
            "ಥರ್ಮಲ್ ವಿದ್ಯುತ್",
            "ಜಲವಿದ್ಯುತ್",
            "ನ್ಯೂಕ್ಲಿಯರ್ ವಿದ್ಯುತ್",
            "ಸೌರಶಕ್ತಿ",
          ],
          answer: "ಜಲವಿದ್ಯುತ್",
        },
      ],
    },
    food: {
      title: "ಆಹಾರ",
      questions: [
        {
          question: "ಯಾವ ಆಹಾರವು 'ದೇವರ ಆಹಾರ' ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತದೆ?",
          options: ["ಅಕ್ಕಿ", "ಗೋಧಿ", "ಜೋಳ", "ರಾಗಿ"],
          answer: "ಅಕ್ಕಿ",
        },
        {
          question: "ವಿಶ್ವದ ಅತಿ ಹಳೆಯ ಮಸಾಲೆ ಯಾವುದು?",
          options: ["ಮೆಣಸು", "ಇಂಗು", "ಹಳದಿ", "ದಾಲ್ಚಿನ್ನಿ"],
          answer: "ಇಂಗು",
        },
        {
          question: "ಯಾವ ಹಣ್ಣು 'ರಾಜರ ಹಣ್ಣು' ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತದೆ?",
          options: ["ಸೇಬು", "ದ್ರಾಕ್ಷಿ", "ಚೆರ್ರಿ", "ಮಾವು"],
          answer: "ಮಾವು",
        },
        {
          question: "ಪೋಷಕಾಂಶಗಳ ಆಗರ ಎಂದು ಕರೆಯಲ್ಪಡುವ ಆಹಾರ ಯಾವುದು?",
          options: ["ಬಾಳೆಹಣ್ಣು", "ಬೇಳೆಕಾಳು", "ತರಕಾರಿಗಳು", "ಹಣ್ಣುಗಳು"],
          answer: "ಬೇಳೆಕಾಳು",
        },
        {
          question: "ವಿಟಮಿನ್ ಸಿ ಯ ಅತ್ಯುತ್ತಮ ಮೂಲ ಯಾವುದು?",
          options: ["ಆಪಲ್", "ಆರೆಂಜ್", "ಬಾಳೆಹಣ್ಣು", "ಗ್ರೇಪ್ಸ್"],
          answer: "ಆರೆಂಜ್",
        },
        {
          question: "ಯಾವ ಆಹಾರವು ಕಬ್ಬಿಣದ ಅತ್ಯುತ್ತಮ ಮೂಲವಾಗಿದೆ?",
          options: ["ಪಾಲಕ್", "ಬಾಳೆಹಣ್ಣು", "ಆಪಲ್", "ಗ್ರೇಪ್ಸ್"],
          answer: "ಪಾಲಕ್",
        },
        {
          question: "ಯಾವ ದೇಶವು ಕಾಫಿಯನ್ನು ಆವಿಷ್ಕರಿಸಿತು?",
          options: ["ಭಾರತ", "ಇಟಲಿ", "ಇಥಿಯೋಪಿಯಾ", "ಬ್ರೆಜಿಲ್"],
          answer: "ಇಥಿಯೋಪಿಯಾ",
        },
        {
          question: "ಯಾವ ಆಹಾರವು ಕ್ಯಾಲ್ಸಿಯಂನ ಅತ್ಯುತ್ತಮ ಮೂಲವಾಗಿದೆ?",
          options: ["ಮೀನು", "ಮೊಟ್ಟೆ", "ಹಾಲು", "ಚೀಸ್"],
          answer: "ಹಾಲು",
        },
        {
          question: "ಯಾವ ದೇಶವು ಪಿಜ್ಜಾವನ್ನು ಆವಿಷ್ಕರಿಸಿತು?",
          options: ["ಇಟಲಿ", "ಅಮೆರಿಕಾ", "ಗ್ರೀಸ್", "ಸ್ಪೇನ್"],
          answer: "ಇಟಲಿ",
        },
        {
          question: "ಯಾವ ಆಹಾರವು ಪ್ರೋಟೀನ್‌ನ ಅತ್ಯುತ್ತಮ ಮೂಲವಾಗಿದೆ?",
          options: ["ಅಕ್ಕಿ", "ಗೋಧಿ", "ಮಾಂಸ", "ಹಣ್ಣುಗಳು"],
          answer: "ಮಾಂಸ",
        },
        {
          question: "ಯಾವ ಆಹಾರವು ಒಮೆಗಾ-3 ಕೊಬ್ಬಿನಾಮ್ಲಗಳಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದೆ?",
          options: ["ಸೋಯಾಬೀನ್", "ಬಾದಾಮಿ", "ಮೀನು", "ಕೋಳಿ ಮಾಂಸ"],
          answer: "ಮೀನು",
        },
        {
          question: "ಯಾವ ಹಣ್ಣು ವಿಟಮಿನ್ ಎ ಯ ಅತ್ಯುತ್ತಮ ಮೂಲವಾಗಿದೆ?",
          options: ["ಸೇಬು", "ದ್ರಾಕ್ಷಿ", "ಬಾಳೆಹಣ್ಣು", "ಕಲ್ಲಂಗಡಿ"],
          answer: "ಕಲ್ಲಂಗಡಿ",
        },
        {
          question: "ಯಾವ ಆಹಾರವು ಫೈಬರ್‌ನ ಅತ್ಯುತ್ತಮ ಮೂಲವಾಗಿದೆ?",
          options: ["ಅಕ್ಕಿ", "ಗೋಧಿ", "ಮಾಂಸ", "ಹಣ್ಣುಗಳು"],
          answer: "ಗೋಧಿ",
        },
        {
          question: "ಯಾವ ಆಹಾರವನ್ನು 'ಸೂಪರ್ ಫುಡ್' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ?",
          options: ["ಬಾಳೆಹಣ್ಣು", "ಬೆರಿಹಣ್ಣು", "ದ್ರಾಕ್ಷಿ", "ಸೇಬು"],
          answer: "ಬೆರಿಹಣ್ಣು",
        },
        {
          question: "ಯಾವ ದೇಶವು ಮಸಾಲಾ ದೋಸೆಯ ತವರನ್ನು ಕಂಡುಹಿಡಿದಿತು?",
          options: ["ಭಾರತ", "ಶ್ರೀಲಂಕಾ", "ಇಂಡೋನೇಷ್ಯಾ", "ಥೈಲ್ಯಾಂಡ್"],
          answer: "ಭಾರತ",
        },
      ],
    },
    sports: {
      title: "ಕ್ರೀಡೆ",
      questions: [
        {
          question: "ಯಾರನ್ನು ಭಾರತೀಯ ಕ್ರಿಕೆಟ್ ದೇವರು ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ?",
          options: [
            "ಸಚಿನ್ ತೆಂಡೂಲ್ಕರ್",
            "ವಿರಾಟ್ ಕೊಹ್ಲಿ",
            "ಎಂಎಸ್ ಧೋನಿ",
            "ರಾಹುಲ್ ದ್ರಾವಿಡ್",
          ],
          answer: "ಸಚಿನ್ ತೆಂಡೂಲ್ಕರ್",
        },
        {
          question: "IPL ಯಾವ ವರ್ಷ ಆರಂಭಗೊಂಡಿತು?",
          options: ["2007", "2008", "2009", "2010"],
          answer: "2008",
        },
        {
          question: "ಭಾರತ ಕ್ರಿಕೆಟ್ ವಿಶ್ವಕಪ್ ಗೆದ್ದ ಮೊದಲ ಬಾರಿ ಯಾವ ವರ್ಷ?",
          options: ["1983", "1987", "1992", "2011"],
          answer: "1983",
        },
        {
          question:
            "ಯಾವ ಕ್ರಿಕೆಟಿಗ ಅಂತರಾಷ್ಟ್ರೀಯ ಕ್ರಿಕೆಟ್ ನಲ್ಲಿ 100 ಶತಕಗಳನ್ನು ಬಾರಿಸಿದ್ದಾರೆ?",
          options: [
            "ವಿರಾಟ್ ಕೊಹ್ಲಿ",
            "రికీ ಪಾಂಟಿಂಗ್",
            "ರಾಹುಲ್ ದ್ರಾವಿಡ್",
            "ಸಚಿನ್ ತೆಂಡೂಲ್ಕರ್",
          ],
          answer: "ಸಚಿನ್ ತೆಂಡೂಲ್ಕರ್",
        },
        {
          question:
            "ಯಾವ ಭಾರತೀಯ ಕ್ರಿಕೆಟಿಗ IPL ನಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಶತಕಗಳನ್ನು ಬಾರಿಸಿದ್ದಾರೆ?",
          options: [
            "ವಿರಾಟ್ ಕೊಹ್ಲಿ",
            "ಶಿಖರ್ ಧವನ್",
            "ಕೆ.ಎಲ್. ರಾಹುಲ್",
            "ರೋಹಿತ್ ಶರ್ಮಾ",
          ],
          answer: "ವಿರಾಟ್ ಕೊಹ್ಲಿ",
        },
        {
          question: "ಒಲಿಂಪಿಕ್ ಕ್ರೀಡೆಗಳು ಎಲ್ಲಿ ಹುಟ್ಟಿದವು?",
          options: ["ಭಾರತ", "ಗ್ರೀಸ್", "ರೋಮ್", "ಚೀನಾ"],
          answer: "ಗ್ರೀಸ್",
        },
        {
          question:
            "ಯಾವ ಭಾರತೀಯ ಕ್ರೀಡಾಪಟು ಒಲಿಂಪಿಕ್ ನಲ್ಲಿ ಚಿನ್ನದ ಪದಕ ಗೆದ್ದಿದ್ದಾರೆ?",
          options: [
            "ಪಿ.ಟಿ. ಉಷಾ",
            "ನೀರಜ್ ಚೋಪ್ರಾ",
            "ಪಿ.ವಿ. ಸಿಂಧು",
            "ಸೈನಾ ನೆಹ್ವಾಲ್",
          ],
          answer: "ನೀರಜ್ ಚೋಪ್ರಾ",
        },
        {
          question: "ಯಾವ ಕ್ರೀಡೆಯನ್ನು 'ಆಟಗಳ ರಾಜ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ?",
          options: ["ಹಾಕಿ", "ಫುಟ್ಬಾಲ್", "ಕ್ರಿಕೆಟ್", "ಬ್ಯಾಡ್ಮಿಂಟನ್"],
          answer: "ಫುಟ್ಬಾಲ್",
        },
        {
          question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಕ್ರೀಡೆ ಯಾವುದು?",
          options: ["ಹಾಕಿ", "ಕಬಡ್ಡಿ", "ಕ್ರಿಕೆಟ್", "ಯಾವುದೂ ಅಲ್ಲ"],
          answer: "ಹಾಕಿ",
        },
        {
          question: "ವಿಶ್ವಕಪ್ ಫುಟ್ಬಾಲ್ ಯಾವ ವರ್ಷ ಆರಂಭಗೊಂಡಿತು?",
          options: ["1930", "1950", "1960", "1970"],
          answer: "1930",
        },
        {
          question:
            "ಯಾವ ಭಾರತೀಯ ಟೆನಿಸ್ ಆಟಗಾರ್ತಿ ಗ್ರ್ಯಾಂಡ್ ಸ್ಲಾಮ್ ಪ್ರಶಸ್ತಿ ಗೆದ್ದಿದ್ದಾರೆ?",
          options: [
            "ಸಾನಿಯಾ ಮಿರ್ಜಾ",
            "ಅಂಕಿತಾ ರೈನಾ",
            "ರುತುಜಾ ಭೋಸಲೆ",
            "ನಿರುಪಮಾ ಸಂಜೀವ್",
          ],
          answer: "ಸಾನಿಯಾ ಮಿರ್ಜಾ",
        },
        {
          question:
            "ಯಾವ ಭಾರತೀಯ ಹಾಕಿ ಆಟಗಾರನನ್ನು 'ಹಾಕಿ ಮಾಂತ್ರಿಕ' ಎಂದು ಕರೆಯುತ್ತಾರೆ?",
          options: [
            "ಸರ್ದಾರ್ ಸಿಂಗ್",
            "ಧ್ಯಾನ್ ಚಂದ್",
            "ಪಿ.ಆರ್. ಶ್ರೀಜೇಶ್",
            "ಬಲಬೀರ್ ಸಿಂಗ್",
          ],
          answer: "ಧ್ಯಾನ್ ಚಂದ್",
        },
        {
          question:
            "ಯಾವ ಭಾರತೀಯ ಬ್ಯಾಡ್ಮಿಂಟನ್ ಆಟಗಾರ್ತಿ ಒಲಿಂಪಿಕ್ ಪದಕ ಗೆದ್ದಿದ್ದಾರೆ?",
          options: [
            "ಅಶ್ವಿನಿ ಪೊನ್ನಪ್ಪ",
            "ಪಿ.ವಿ. ಸಿಂಧು",
            "ಜ್ವಾಲಾ ಗುಟ್ಟಾ",
            "ಅಪರ್ಣಾ ಪೋಪಟ್",
          ],
          answer: "ಪಿ.ವಿ. ಸಿಂಧು",
        },
        {
          question: "ಭಾರತೀಯ ಕ್ರಿಕೆಟ್ ತಂಡದ ಮೊದಲ ನಾಯಕ ಯಾರು?",
          options: [
            "ಕಪಿಲ್ ದೇವ್",
            "ಸಿ.ಕೆ. ನಾಯುಡು",
            "ಲಾಲಾ ಅಮರನಾಥ್",
            "ಸುನಿಲ್ ಗವಾಸ್ಕರ್",
          ],
          answer: "ಸಿ.ಕೆ. ನಾಯುಡು",
        },
        {
          question:
            "ಭಾರತೀಯ ಹಾಕಿ ತಂಡ ಮೊಟ್ಟ ಮೊದಲ ಬಾರಿ ಒಲಿಂಪಿಕ್ ಚಿನ್ನ ಗೆದ್ದ ವರ್ಷ?",
          options: ["1928", "1936", "1948", "1956"],
          answer: "1928",
        },
      ],
    },
    animalBirds: {
      title: "ಪ್ರಾಣಿ-ಪಕ್ಷಿ",
      questions: [
        {
          question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪಕ್ಷಿ ಯಾವುದು?",
          options: ["ಗಿಳಿ", "ನವಿಲು", "ಗೂಬೆ", "ಪಾರಿವಾಳ"],
          answer: "ನವಿಲು",
        },
        {
          question: "ಭೂಮಿಯ ಮೇಲೆ ಅತಿ ವೇಗದ ಪ್ರಾಣಿ ಯಾವುದು?",
          options: ["ಚಿರತೆ", "ಸಿಂಹ", "ಜಿಂಕೆ", "ಕತ್ತೆಕಿರುಬ"],
          answer: "ಚಿರತೆ",
        },
        {
          question: "ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ಸಮುದ್ರ ಜೀವಿ ಯಾವುದು?",
          options: ["ಆಕ್ಟೋಪಸ್", "ತಿಮಿಂಗಿಲ", "ಶಾರ್ಕ್", "ಡಾಲ್ಫಿನ್"],
          answer: "ತಿಮಿಂಗಿಲ",
        },
        {
          question: "ಯಾವ ಪಕ್ಷಿ ಹಾರಲು ಸಾಧ್ಯವಿಲ್ಲ?",
          options: ["ಗಿಡುಗ", "ಶುತುರ್ಮೃಗ", "ಪಾರಿವಾಳ", "ಕಾಗೆ"],
          answer: "ಶುತುರ್ಮೃಗ",
        },
        {
          question: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪ್ರಾಣಿ ಯಾವುದು?",
          options: ["ಸಿಂಹ", "ಆನೆ", "ಹುಲಿ", "ಕರಡಿ"],
          answer: "ಹುಲಿ",
        },
        {
          question: "ಅತಿ ಬುದ್ಧಿವಂತ ಪ್ರಾಣಿ ಎಂದು ಯಾವುದನ್ನು ಪರಿಗಣಿಸಲಾಗಿದೆ?",
          options: ["ನಾಯಿ", "ಚಿಂಪಾಂಜಿ", "ಬೆಕ್ಕು", "ಕುದುರೆ"],
          answer: "ಚಿಂಪಾಂಜಿ",
        },
        {
          question: "ಅಮೆಜಾನ್ ಕಾಡಿನಲ್ಲಿ ವಾಸಿಸುವ ದೊಡ್ಡ ಕೋತಿ ಯಾವುದು?",
          options: ["ಮಂಗ", "ಬಾಬೂನ್", "ಗೊರಿಲ್ಲಾ", "ಒರಾಂಗುಟಾನ್"],
          answer: "ಗೊರಿಲ್ಲಾ",
        },
        {
          question: "ಯಾವ ಪಕ್ಷಿ ಅತಿ ಹೆಚ್ಚು ಕಾಲ ಬದುಕುತ್ತದೆ?",
          options: ["ಗಿಡುಗ", "ಗಿಳಿ", "ಕಾಗೆ", "ಹದ್ದು"],
          answer: "ಗಿಳಿ",
        },
        {
          question: "ಯಾವ ಪ್ರಾಣಿ ತನ್ನ ಬಣ್ಣವನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ?",
          options: ["ಹಾವಸೆ", "ಊಸರವಳ್ಳಿ ", "ಹಲ್ಲಿ", "ಹಾವು"],
          answer: "ಊಸರವಳ್ಳಿ ",
        },
        {
          question: "ಹಿಮ್ಮುಖವಾಗಿ ಹಾರಬಲ್ಲ ಏಕೈಕ ಪಕ್ಷಿ ಯಾವುದು?",
          options: ["ಗುಬ್ಬಚ್ಚಿ", "ಹಮ್ಮಿಂಗ್ ಬರ್ಡ್", "ಕಿವಿ", "ಕೋಗಿಲೆ"],
          answer: "ಹಮ್ಮಿಂಗ್ ಬರ್ಡ್",
        },
        {
          question: "ಯಾವ ಪ್ರಾಣಿಯನ್ನು 'ಕಾಡಿನ ರಾಜ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ?",
          options: ["ಹುಲಿ", "ಕರಡಿ", "ಆನೆ", "ಸಿಂಹ"],
          answer: "ಸಿಂಹ",
        },
        {
          question: "ಮಾನವನಿಗೆ ಅತ್ಯಂತ ಹತ್ತಿರದ ಸಂಬಂಧಿ ಪ್ರಾಣಿ ಯಾವುದು?",
          options: ["ಗೊರಿಲ್ಲಾ", "ಚಿಂಪಾಂಜಿ", "ಒರಾಂಗುಟಾನ್", "ಮಂಗ"],
          answer: "ಚಿಂಪಾಂಜಿ",
        },
        {
          question: "ಮರುಭೂಮಿಯ ಹಡಗು ಎಂದು ಯಾವ ಪ್ರಾಣಿಯನ್ನು ಕರೆಯುತ್ತಾರೆ?",
          options: ["ಕುದುರೆ", "ಕತ್ತೆ", "ಒಂಟೆ", "ಜಿಂಕೆ"],
          answer: "ಒಂಟೆ",
        },
        {
          question: "ಭಾರತದಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಕಾಣಸಿಗುವ ಪಕ್ಷಿ ಯಾವುದು?",
          options: ["ಕಾಗೆ", "ಗುಬ್ಬಚ್ಚಿ", "ಪಾರಿವಾಳ", "ಗಿಳಿ"],
          answer: "ಕಾಗೆ",
        },
        {
          question: "ಅತಿ ಬುದ್ಧಿವಂತ ಸಮುದ್ರ ಜೀವಿ ಯಾವುದು?",
          options: ["ಶಾರ್ಕ್", "ತಿಮಿಂಗಿಲ", "ಡಾಲ್ಫಿನ್", "ಆಕ್ಟೋಪಸ್"],
          answer: "ಡಾಲ್ಫಿನ್",
        },
      ],
    },
    historical: {
      title: "ಐತಿಹಾಸಿಕ",
      questions: [
        {
          question: "ತಾಜ್ ಮಹಲ್ ಯಾವ ನಗರದಲ್ಲಿದೆ?",
          options: ["ಜೈಪುರ", "ಆಗ್ರಾ", "ದೆಹಲಿ", "ವಾರಾಣಸಿ"],
          answer: "ಆಗ್ರಾ",
        },
        {
          question: "ಹಂಪಿಯು ಯಾವ ಸಾಮ್ರಾಜ್ಯದ ರಾಜಧಾನಿಯಾಗಿತ್ತು?",
          options: [
            "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ",
            "ಚೋಳ ಸಾಮ್ರಾಜ್ಯ",
            "ಮೌರ್ಯ ಸಾಮ್ರಾಜ್ಯ",
            "ಗುಪ್ತ ಸಾಮ್ರಾಜ್ಯ",
          ],
          answer: "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ",
        },
        {
          question: "ಗೇಟ್‌ವೇ ಆಫ್ ಇಂಡಿಯಾ ಎಲ್ಲಿದೆ?",
          options: ["ಮುಂಬೈ", "ಕೋಲ್ಕತ್ತಾ", "ಚೆನ್ನೈ", "ದೆಹಲಿ"],
          answer: "ಮುಂಬೈ",
        },
        {
          question: "'ಕಪ್ಪು ತಾಜ್ ಮಹಲ್' ಎಂದು ಯಾವುದನ್ನು ಕರೆಯುತ್ತಾರೆ?",
          options: [
            "ಚಾರ್ಮಿನಾರ್",
            "ಮೆಹ್ತಾಬ್ ಬಾಗ್",
            "ಕುತುಬ್ ಮಿನಾರ್",
            "ಹುಮಾಯೂನನ ಸಮಾಧಿ",
          ],
          answer: "ಮೆಹ್ತಾಬ್ ಬಾಗ್",
        },
        {
          question: "ಅಜಂತಾ ಮತ್ತು ಎಲ್ಲೋರಾ ಗುಹೆಗಳು ಯಾವ ರಾಜ್ಯದಲ್ಲಿವೆ?",
          options: ["ಮಹಾರಾಷ್ಟ್ರ", "ರಾಜಸ್ಥಾನ", "ಮಧ್ಯಪ್ರದೇಶ", "ಕರ್ನಾಟಕ"],
          answer: "ಮಹಾರಾಷ್ಟ್ರ",
        },
        {
          question: "ಕುತುಬ್ ಮಿನಾರ್ ಅನ್ನು ಯಾರು ನಿರ್ಮಿಸಲು ಪ್ರಾರಂಭಿಸಿದರು?",
          options: ["ಇಲ್ತುಮಿಶ್", "ಅಕ್ಬರ್", "ಕುತುಬುದ್ದೀನ್ ಐಬಕ್", "ಷಹಜಹಾನ್"],
          answer: "ಕುತುಬುದ್ದೀನ್ ಐಬಕ್",
        },
        {
          question: "ಭಾರತಕ್ಕೆ ಸ್ವಾತಂತ್ರ್ಯ ಯಾವಾಗ ಸಿಕ್ಕಿತು?",
          options: ["1947", "1950", "1945", "1942"],
          answer: "1947",
        },
        {
          question: "ಯಾವ ನಗರವನ್ನು 'ಗುಲಾಬಿ ನಗರ' (Pink City) ಎಂದು ಕರೆಯುತ್ತಾರೆ?",
          options: ["ಜೈಪುರ", "ಜೋಧ್‌ಪುರ್", "ಉದಯಪುರ", "ಅಮೃತಸರ್"],
          answer: "ಜೈಪುರ",
        },
        {
          question: "ಜಲಿಯನ್ ವಾಲಾ ಬಾಗ್ ಹತ್ಯಾಕಾಂಡ ಎಲ್ಲಿ ನಡೆಯಿತು?",
          options: ["ದೆಹಲಿ", "ಅಮೃತಸರ್", "ಲಾಹೋರ್", "ಕೋಲ್ಕತ್ತಾ"],
          answer: "ಅಮೃತಸರ್",
        },
        {
          question: "ರಾಷ್ಟ್ರಪತಿ ಭವನ ಯಾವ ನಗರದಲ್ಲಿದೆ?",
          options: ["ದೆಹಲಿ", "ಮುಂಬೈ", "ಕೋಲ್ಕತ್ತಾ", "ಚೆನ್ನೈ"],
          answer: "ದೆಹಲಿ",
        },
        {
          question: "ಗೋಲ್ಕೊಂಡಾ ಕೋಟೆ ಯಾವ ನಗರದಲ್ಲಿದೆ?",
          options: ["ಬೆಂಗಳೂರು", "ಹೈದರಾಬಾದ್", "ಪುಣೆ", "ಮೈಸೂರು"],
          answer: "ಹೈದರಾಬಾದ್",
        },
        {
          question: "ದೆಹಲಿಯಲ್ಲಿರುವ ಕಬ್ಬಿಣದ ಸ್ತಂಭವು ಯಾರ ಕಾಲದ್ದು?",
          options: ["ಅಶೋಕ", "ಚಂದ್ರಗುಪ್ತ II", "ಹರ್ಷವರ್ಧನ", "ಸಮುದ್ರಗುಪ್ತ"],
          answer: "ಚಂದ್ರಗುಪ್ತ II",
        },
        {
          question: "ಆಗ್ರಾದ ಕೋಟೆಯನ್ನು ಯಾರು ನಿರ್ಮಿಸಿದರು?",
          options: ["ಅಕ್ಬರ್", "ಷಹಜಹಾನ್", "ಹುಮಾಯೂನ್", "ಬಾಬರ್"],
          answer: "ಅಕ್ಬರ್",
        },
        {
          question: "ಭಾರತದ 'ಸಾಂಸ್ಕೃತಿಕ ರಾಜಧಾನಿ' ಎಂದು ಯಾವ ನಗರವನ್ನು ಕರೆಯುತ್ತಾರೆ?",
          options: ["ಕೋಲ್ಕತ್ತಾ", "ದೆಹಲಿ", "ಬೆಂಗಳೂರು", "ಮೈಸೂರು"],
          answer: "ಕೋಲ್ಕತ್ತಾ",
        },
        {
          question: "ವಿಕ್ಟೋರಿಯಾ ಮೆಮೋರಿಯಲ್ ಎಲ್ಲಿದೆ?",
          options: ["ಕೋಲ್ಕತ್ತಾ", "ಮುಂಬೈ", "ದೆಹಲಿ", "ಚೆನ್ನೈ"],
          answer: "ಕೋಲ್ಕತ್ತಾ",
        },
      ],
    },
    world: {
      title: "ದೇಶ-ವಿದೇಶ",
      questions: [
        {
          question: "ಐಫೆಲ್ ಟವರ್ ಯಾವ ನಗರದಲ್ಲಿದೆ?",
          options: ["ರೋಮ್", "ಲಂಡನ್", "ಪ್ಯಾರಿಸ್", "ಬರ್ಲಿನ್"],
          answer: "ಪ್ಯಾರಿಸ್",
        },
        {
          question: "ಚೀನಾದ ಮಹಾಗೋಡೆಯ ಉದ್ದ ಎಷ್ಟು?",
          options: [
            "5,000 ಕಿ.ಮೀ",
            "10,000 ಕಿ.ಮೀ",
            "15,000 ಕಿ.ಮೀ",
            "21,000 ಕಿ.ಮೀ",
          ],
          answer: "21,000 ಕಿ.ಮೀ",
        },
        {
          question: "ಸ್ವಾತಂತ್ರ್ಯದ ಪ್ರತಿಮೆ (Statue of Liberty) ಎಲ್ಲಿದೆ?",
          options: ["ಕೆನಡಾ", "ಅಮೆರಿಕ", "ಫ್ರಾನ್ಸ್", "ಇಂಗ್ಲೆಂಡ್"],
          answer: "ಅಮೆರಿಕ",
        },
        {
          question: "ಬುರ್ಜ್ ಖಲೀಫಾ ಯಾವ ದೇಶದಲ್ಲಿದೆ?",
          options: ["ಸೌದಿ ಅರೇಬಿಯಾ", "ದುಬೈ (ಯುಎಇ)", "ಕತಾರ್", "ಇರಾನ್"],
          answer: "ದುಬೈ (ಯುಎಇ)",
        },
        {
          question: "ವಿಶ್ವದ ಅತಿ ದೊಡ್ಡ ದೇಶ ಯಾವುದು?",
          options: ["ಚೀನಾ", "ಅಮೆರಿಕ", "ರಷ್ಯಾ", "ಕೆನಡಾ"],
          answer: "ರಷ್ಯಾ",
        },
        {
          question: "ಮಾಚु ಪಿಚು ಯಾವ ದೇಶದಲ್ಲಿದೆ?",
          options: ["ಬೊಲಿವಿಯಾ", "ಪೆರು", "ಚಿಲಿ", "ಅರ್ಜೆಂಟೀನಾ"],
          answer: "ಪೆರು",
        },
        {
          question: "ಅಲ್ಹಾಂಬ್ರಾ ಅರಮನೆ ಯಾವ ದೇಶದಲ್ಲಿದೆ?",
          options: ["ಪೋರ್ಚುಗಲ್", "ಇಟಲಿ", "ಸ್ಪೇನ್", "ಗ್ರೀಸ್"],
          answer: "ಸ್ಪೇನ್",
        },
        {
          question: "ಕೊಲೋಸಿಯಮ್ ಯಾವ ಸಾಮ್ರಾಜ್ಯದ ಸ್ಮಾರಕವಾಗಿದೆ?",
          options: [
            "ಗ್ರೀಕ್ ಸಾಮ್ರಾಜ್ಯ",
            "ರೋಮನ್ ಸಾಮ್ರಾಜ್ಯ",
            "ಪರ್ಷಿಯನ್ ಸಾಮ್ರಾಜ್ಯ",
            "ಈಜಿಪ್ಟ್ ಸಾಮ್ರಾಜ್ಯ",
          ],
          answer: "ರೋಮನ್ ಸಾಮ್ರಾಜ್ಯ",
        },
        {
          question: "ನಯಾಗರಾ ಜಲಪಾತ ಯಾವ ಎರಡು ದೇಶಗಳ ನಡುವೆ ಇದೆ?",
          options: [
            "ಅಮೆರಿಕ-ಕೆನಡಾ",
            "ಕೆನಡಾ-ಮೆಕ್ಸಿಕೋ",
            "ಅಮೆರಿಕ-ಮೆಕ್ಸಿಕೋ",
            "ಬ್ರೆಜಿಲ್-ಅರ್ಜೆಂಟೀನಾ",
          ],
          answer: "ಅಮೆರಿಕ-ಕೆನಡಾ",
        },
        {
          question: "ಸಿಡ್ನಿ ಒಪೇರಾ ಹೌಸ್ ಯಾವ ದೇಶದಲ್ಲಿದೆ?",
          options: ["ಅಮೆರಿಕ", "ಆಸ್ಟ್ರೇಲಿಯಾ", "ಕೆನಡಾ", "ಇಂಗ್ಲೆಂಡ್"],
          answer: "ಆಸ್ಟ್ರೇಲಿಯಾ",
        },
        {
          question: "ವಿಶ್ವದ ಅತಿ ದೊಡ್ಡ ಮರುಭೂಮಿ ಯಾವುದು?",
          options: [
            "ಸಹಾರಾ ಮರುಭೂಮಿ",
            "ಗೋಬಿ ಮರುಭೂಮಿ",
            "ಅಂಟಾರ್ಕ್ಟಿಕ್ ಮರುಭೂಮಿ",
            "ಅರೇಬಿಯನ್ ಮರುಭೂಮಿ",
          ],
          answer: "ಅಂಟಾರ್ಕ್ಟಿಕ್ ಮರುಭೂಮಿ",
        },
        {
          question: "ಮೌಂಟ್ ಫ್ಯೂಜಿ ಯಾವ ದೇಶದ ಪ್ರಸಿದ್ಧ ಪರ್ವತವಾಗಿದೆ?",
          options: ["ಚೀನಾ", "ಜಪಾನ್", "ಕೊರಿಯಾ", "ವಿಯೆಟ್ನಾಂ"],
          answer: "ಜಪಾನ್",
        },
        {
          question: "ವಿಶ್ವದ ಅತಿ ಹೆಚ್ಚು ಜನಸಂಖ್ಯೆ ಹೊಂದಿದ ದೇಶ ಯಾವುದು?",
          options: ["ಚೀನಾ", "ಭಾರತ", "ಅಮೆರಿಕ", "ಇಂಡೋನೇಷ್ಯಾ"],
          answer: "ಭಾರತ",
        },
        {
          question: "ಪೆಟ್ರಾ, ಪ್ರಾಚೀನ 'ಗುಲಾಬಿ ನಗರ' ಯಾವ ದೇಶದಲ್ಲಿದೆ?",
          options: ["ಮೊರಾಕೊ", "ಜೋರ್ಡಾನ್", "ಟುನೀಶಿಯಾ", "ಈಜಿಪ್ಟ್"],
          answer: "ಜೋರ್ಡಾನ್",
        },
        {
          question: "ಗಿಜಾದ ಪಿರಮಿಡ್‌ಗಳು ಯಾವ ದೇಶದಲ್ಲಿವೆ?",
          options: ["ಗ್ರೀಸ್", "ಟರ್ಕಿ", "ಈಜಿಪ್ಟ್", "ಇರಾನ್"],
          answer: "ಈಜಿಪ್ಟ್",
        },
      ],
    },
  };

  // --- SCRIPT FOR HOME PAGE (index.html) ---
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("navbar");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  // --- SCRIPT FOR QUIZ PAGE (quiz.html) ---
  if (document.querySelector(".quiz-page-container")) {
    const quizTitleEl = document.getElementById("quiz-title");
    const questionTextEl = document.getElementById("question-text");
    const optionsContainerEl = document.getElementById("options-container");
    const questionCounterEl = document.getElementById("question-counter");
    const progressBarEl = document.getElementById("progress-bar");
    const timerEl = document.getElementById("timer");

    // Modal elements
    const resultsModal = document.getElementById("results-modal");
    const modalTitle = document.getElementById("modal-title");
    const coinAwardEl = document.getElementById("coin-award");
    const scoreTextEl = document.getElementById("score-text");
    const restartBtn = document.getElementById("restart-btn");
    const celebrationContainer = document.getElementById(
      "celebration-container"
    );

    let currentCategory;
    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 20;

    function startQuiz() {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get("category");

      if (category && allQuestions[category]) {
        currentCategory = category;
        questions = allQuestions[category].questions;
        document.title = allQuestions[category].title;
        quizTitleEl.innerText = allQuestions[category].title;

        currentQuestionIndex = 0;
        score = 0;
        resultsModal.style.display = "none";

        showQuestion();
      } else {
        questionTextEl.innerText =
          "ವರ್ಗ ಕಂಡುಬಂದಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ.";
      }
    }

    function showQuestion() {
      resetState();
      const question = questions[currentQuestionIndex];
      questionTextEl.innerText = question.question;

      question.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerHTML = `<span>${option}</span><span class="icon"></span>`;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(button, option));
        optionsContainerEl.appendChild(button);
      });

      updateProgress();
      startTimer();
    }

    function resetState() {
      clearInterval(timer);
      timeLeft = 20;
      timerEl.innerText = timeLeft;

      while (optionsContainerEl.firstChild) {
        optionsContainerEl.removeChild(optionsContainerEl.firstChild);
      }
    }

    function selectAnswer(selectedBtn, selectedOption) {
      clearInterval(timer);
      const correctOption = questions[currentQuestionIndex].answer;

      if (selectedOption === correctOption) {
        score++;
        selectedBtn.classList.add("correct");
        selectedBtn.querySelector(".icon").innerHTML =
          '<i class="fas fa-check"></i>';
      } else {
        selectedBtn.classList.add("incorrect");
        selectedBtn.querySelector(".icon").innerHTML =
          '<i class="fas fa-times"></i>';
      }

      Array.from(optionsContainerEl.children).forEach((btn) => {
        btn.classList.add("disabled");
        if (btn.innerText === correctOption) {
          if (!btn.classList.contains("correct")) {
            btn.classList.add("correct");
            btn.querySelector(".icon").innerHTML =
              '<i class="fas fa-check"></i>';
          }
        }
      });

      // Auto-move to next question after a delay
      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          showResults();
        }
      }, 1500); // 1.5-second delay
    }

    function updateProgress() {
      const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
      progressBarEl.style.width = `${progress}%`;
      questionCounterEl.innerText = `ಪ್ರಶ್ನೆ ${currentQuestionIndex + 1}/${
        questions.length
      }`;
    }

    function startTimer() {
      timer = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timer);
          // Disable options and show correct answer
          Array.from(optionsContainerEl.children).forEach((btn) => {
            btn.classList.add("disabled");
            if (btn.innerText === questions[currentQuestionIndex].answer) {
              btn.classList.add("correct");
              btn.querySelector(".icon").innerHTML =
                '<i class="fas fa-check"></i>';
            }
          });
          // Auto-move after timeout
          setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
              showQuestion();
            } else {
              showResults();
            }
          }, 1500);
        }
      }, 1000);
    }

    function showResults() {
      let coinHTML = "";

      if (score === 15) {
        coinHTML = `
                    <i class="fas fa-award"></i>
                    <p style="color: var(--gold-coin);">ಚಿನ್ನದ ನಾಣ್ಯ ಗೆದ್ದಿದ್ದೀರಿ!</p>
                `;
        triggerCelebration();
      } else if (score >= 12) {
        coinHTML = `
                    <i class="fas fa-medal"></i>
                    <p style="color: var(--copper-coin);">ತಾಮ್ರದ ನಾಣ್ಯ ಗೆದ್ದಿದ್ದೀರಿ!</p>
                `;
        triggerCelebration();
      } else if (score >= 8) {
        coinHTML = `
                    <i class="fas fa-trophy"></i>
                    <p style="color: var(--silver-coin);">ಬೆಳ್ಳಿಯ ನಾಣ್ಯ ಗೆದ್ದಿದ್ದೀರಿ!</p>
                `;
        triggerCelebration();
      } else {
        modalTitle.innerText = "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ";
      }

      coinAwardEl.innerHTML = coinHTML;
      scoreTextEl.innerText = `ನಿಮ್ಮ ಸ್ಕೋರ್: ${questions.length} ರಲ್ಲಿ ${score}`;
      resultsModal.style.display = "flex";
    }

    function triggerCelebration() {
      modalTitle.innerText = "ಅಭಿನಂದನೆಗಳು!";
      celebrationContainer.innerHTML = "";
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.backgroundColor = `hsl(${
          Math.random() * 360
        }, 100%, 50%)`;
        celebrationContainer.appendChild(confetti);
      }
    }

    restartBtn.addEventListener("click", startQuiz);

    startQuiz();
  }
});
