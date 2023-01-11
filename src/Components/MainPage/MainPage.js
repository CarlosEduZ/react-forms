import React, { useState } from "react";
import { useForm } from "../../hook/useForm";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const { form, onChange, clear } = useForm({
    nome: "",
    idade: "",
    email: "",
    endereco: ""
  });

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);
    clear();
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input id="nome" name="nome" value={form.nome} onChange={onChange} />

        <label htmlFor="idade">Idade:</label>
        <Input id="idade" name="idade" value={form.idade} onChange={onChange} />

        <label htmlFor="email">E-mail:</label>
        <Input id="email" name="email" value={form.email} onChange={onChange} />
        <label htmlFor="endereco">Endereço:</label>
        <Input
          id="endereco"
          name="endereco"
          value={form.endereco}
          onChange={onChange}
        />

        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
