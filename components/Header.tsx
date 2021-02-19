import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { GiSmartphone } from 'react-icons/gi';
import { HiOutlineMail } from 'react-icons/hi';
import { RiYoutubeLine } from 'react-icons/ri';
import shadow from '../styles/shadow';
import media from '../styles/media';

function Header() {
  const [change, setChange] = useState(false);
  const [pageY, setPageY] = useState(0);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const Y = pageYOffset - pageY;
    const change = pageYOffset !== 0 && Y >= 0;

    setChange(change);
    setPageY(pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageY, handleScroll]);

  return (
    <HeaderBox>
      <HeaderTop className={change ? 'disappear' : 'appear'}>
        <TopGroup>
          <TopItem>
            <GiSmartphone size={20} /> <span>010-0000-0000</span>
          </TopItem>
          <TopItem>
            <HiOutlineMail size={20} /> <span>anonymous@gmail.com</span>
          </TopItem>
        </TopGroup>
        <TopGroup>
          <TopItem>
            <RiYoutubeLine size={26} color="red" />
          </TopItem>
          <TopItem>
            <img src={'/naver.svg'} alt="" />
          </TopItem>
        </TopGroup>
      </HeaderTop>

      <NavBox change={change}>
        <Nav className={change ? 'white' : 'opa'}>
          <Link href="/" passHref={true}>
            <Logo>
              <img src="/logo.png" alt="Logo" />
            </Logo>
          </Link>
        </Nav>
      </NavBox>
    </HeaderBox>
  );
}

export default Header;

// Styles
const HeaderBox = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  ${shadow(1)};
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;

  &.appear {
    animation: fade-in 1s;
    animation-fill-mode: forwards;
    display: flex;

    ${media.medium} {
      display: none;
    }
  }

  &.disappear {
    animation: fade-out 1s;
    animation-fill-mode: forwards;
    display: none;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const TopGroup = styled.div`
  display: flex;
`;

const TopItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  span {
    margin-left: 0.4rem;
  }

  svg,
  img {
    opacity: 0.5;
    cursor: pointer;
    transition: 0.4s all;

    &:hover {
      opacity: 1;
    }
  }
`;

const NavBox = styled.div<{ change: boolean }>`
  display: flex;
  justify-content: center;
  height: auto;

  ${(props) =>
    props.change &&
    css`
      background: white;
    `}
`;

const Nav = styled.div`
  width: 1200px;
  height: 90px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: 0.4s all;

  img {
    width: 100%;
  }

  &.white {
    height: 60px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    img {
      width: 65%;
    }
  }

  ${media.large} {
    width: 992px;
  }

  ${media.medium} {
    width: 100%;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 150px;
`;
