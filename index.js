const testimonials = [
  {
    name: "Saul Goodman",
    phtotoURL:
      "https://www.stonedsanta.in/wp-content/uploads/2019/06/charcoal-portrait-by-jay-600x600.jpeg",
    text: "“Life-changing! This product turned my daily routine into a breeze.” 💫",
  },
  {
    name: "Jamal Watkins",
    phtotoURL:
      "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "“Unbelievable results! This product exceeded my expectations.” 🌟",
  },
  {
    name: "Sean Padworth",
    phtotoURL:
      "https://images.pexels.com/photos/10965962/pexels-photo-10965962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "“Game-changer! I can’t imagine life without it.” 🚀",
  },
  {
    name: "Jack Hippington",
    phtotoURL:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "“Effortless and effective. Highly recommended!” 👍",
  },
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let idx = 0;

uptTest();

function uptTest() {
  const { name, phtotoURL, text } = testimonials[idx];
  imgEl.src = phtotoURL;
  textEl.innerText = text;
  userNameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(uptTest, 10000);
}
