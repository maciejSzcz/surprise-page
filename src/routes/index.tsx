import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

const SECRET_CODE = "thailand2024";
const TRIP_DATE = new Date("2025-12-15T10:00:00+07:00");

const keynotes = [
  "Explore the vibrant streets of Bangkok",
  "Relax on the beautiful beaches of Phuket",
  "Visit ancient temples and floating markets",
  "Enjoy delicious Thai cuisine",
  "Go island hopping and snorkeling",
  "Experience the magic of Thai culture together!",
];

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default component$(() => {
  const loc = useLocation();
  const code = loc.url.searchParams.get("code");
  const timeLeft = useSignal(getTimeLeft(TRIP_DATE));

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      timeLeft.value = getTimeLeft(TRIP_DATE);
    }, 1000);
    return () => clearInterval(interval);
  });

  useVisibleTask$(() => {
    if (code === SECRET_CODE) {
      document.body.classList.add("authenticated");
    } else {
      document.body.classList.remove("authenticated");
    }
  });

  if (code !== SECRET_CODE) {
    return (
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2>🔒 Secret Page</h2>
        <p>Sorry, you need a valid code to see this surprise! 💌</p>
      </div>
    );
  }

  return (
    <div class="tropical-card">
      <h1>🎉 Surprise! 🎉</h1>
      <h2>
        We&apos;re going to <span style={{ color: "#00b894" }}>Thailand</span>!
      </h2>
      <div class="countdown">
        Countdown to our adventure:
        {timeLeft.value ? (
          <div class="countdown-timer">
            {timeLeft.value.days}d {timeLeft.value.hours}h{" "}
            {timeLeft.value.minutes}m {timeLeft.value.seconds}s
          </div>
        ) : (
          <div
            style={{
              color: "#00b894",
              fontWeight: 600,
              fontSize: "1.5rem",
              marginTop: 8,
            }}
          >
            It&apos;s time to go! ✈️🌴
          </div>
        )}
      </div>
      <ul>
        {keynotes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
      <div class="memories">
        I can&apos;t wait to make these memories with you! 💖
      </div>
    </div>
  );
});
