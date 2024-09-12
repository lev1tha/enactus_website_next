"use client";
import React from "react";
import style from "./layout.module.css";
import Link from "next/link";

export default function index() {
  return (
    <div className={style.layout_container}>
      <div className="logotype">
        <img src="/assets/svg/fulllogo.svg" alt="" />
      </div>
      <form>
        <img src="/assets/svg/search.svg" alt="" />
        <input type="text" placeholder="Поиск..." />
      </form>
      <nav>
        <div>
          <img src="/assets/svg/univer.svg" alt="" />
          <Link href={"/"}>
            <span>Универитеты</span>
          </Link>
        </div>
        <div>
          <img src="/assets/svg/command.svg" alt="" />
          <Link href={"/"}>
            <span>Команды</span>
          </Link>
        </div>
        <div>
          <img src="/assets/svg/task.svg" alt="" />
          <Link href={"/"}>
            <span>Проекты</span>
          </Link>
        </div>
        <div>
          <img src="/assets/svg/man.svg" alt="" />
          <Link href={"/"}>
            <span>Участники</span>
          </Link>
        </div>
      </nav>
      <button className={style.exit}>
        <img src="/assets/svg/exit.svg" alt="" />
        <Link href={"/"}>
          <span>Войти</span>
        </Link>
      </button>
    </div>
  );
}
