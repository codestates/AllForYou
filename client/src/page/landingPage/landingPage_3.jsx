import React from "react";
import style from "./landingPage_3.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { scrollTop } from "../../action";

const LandingPage_3 = () => {

  const targets = document.querySelectorAll('[data-observer]')
const images = document.querySelectorAll('[data-img]')

const options = {
  rootMargin: '0px',
  threshold: 1.0
}

const addClass = (el) => {
  if (!el.classList.contains('is-visible')) {
    el.classList.add('is-visible')
  }
}

const removeClass = (el) => {
  if (el.classList.contains('is-visible')) {
    el.classList.remove('is-visible')
  }
}

const doThings = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      addClass(entry.target)
    } else {
      removeClass(entry.target)
    }
  })
}

const observer = new IntersectionObserver(doThings, options)

const observer2 = new IntersectionObserver(doThings, { ...options, threshold: 0.4 })

targets.forEach(target => {
  observer.observe(target)
})

images.forEach(target => {
  observer2.observe(target)
})
  

  return (
    <div className={style.body}>
    <section className={style.a1}></section>
    <section className={style.a2}></section>
    <section className={style.a3}></section>
    <section className={style.a4}></section>
    <section className={style.a5}></section>
    <section className={style.a6}></section>
    <section className={style.a7}></section>
    <section className={style.a8}></section>
    </div>
  );
};

export default LandingPage_3;
