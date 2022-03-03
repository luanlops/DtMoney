import { useState } from 'react'
import { Container, Content } from './styles'

import logoImg from '../../assets/logo.svg'


interface HeaderProps {
  onOpenNewTRansactionModal: () => void;
}

export function Header({ onOpenNewTRansactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTRansactionModal}>
          Nova Transacao
        </button>


      </Content>
    </Container>
  )
}