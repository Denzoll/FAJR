import React, { useState } from "react";

export default function Contacts() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Имя обязательно";
    }

    if (!phone.trim() || !phoneRegex.test(phone)) {
      newErrors.phone = "Введите корректный номер телефона";
    }

    if (!message.trim()) {
      newErrors.message = "Сообщение обязательно";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Если нет ошибок, возвращает true
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ name, phone, message }); // Отправка данных
    }
  };

  return (
    <div className="bg-white w-full sm:w-1/2 lg:w-1/3 mx-auto p-6 shadow-lg rounded-lg text-gray-700">
      <h3 className="font-bold mb-4">Связаться с нами!</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold">
            Имя
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-4"
            placeholder="Ваше имя"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-bold">
            Телефон
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-4"
            placeholder="+7 (___) ___-__-__"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-bold">
            Сообщение
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-4"
            placeholder="Ваше сообщение"
            rows="4"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}

