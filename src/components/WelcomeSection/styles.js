import { css } from '@emotion/core';

export const styHero = css`
  width: 100%;
  min-height: 100vh;
  background: #f5e8eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
`;

export const styBackground = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5e8eb;

  .invitation-card {
    position: relative;
    width: min(100%, 1000px);
    min-height: 850px;
    background: rgba(255, 245, 248, 0.9);
    border: 4px solid #c79b4d;
    box-shadow: inset 0 0 0 2px rgba(199, 155, 77, 0.7), 0 0 0 8px rgba(199, 155, 77, 0.12);
    padding: 4rem 3rem 3rem;
    text-align: center;
    color: #a36a6d;
    overflow: hidden;
  }

  .invitation-card::before,
  .invitation-card::after {
    content: '';
    position: absolute;
    inset: 18px;
    border: 1px solid rgba(199, 155, 77, 0.6);
    pointer-events: none;
  }

  .ornament {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 120px;
    border-radius: 50%;
    border: 2px solid rgba(199, 155, 77, 0.7);
    opacity: 0.8;
  }

  .ornament-top {
    top: 12px;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 140px;
    background: radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.7), transparent 38%);
  }

  .ornament-bottom {
    bottom: 10px;
    border-bottom: none;
    border-left: none;
    border-right: none;
    height: 130px;
    background: radial-gradient(circle at 50% 90%, rgba(255, 255, 255, 0.5), transparent 42%);
  }

  .invitation-copy {
    position: relative;
    z-index: 1;
    max-width: 760px;
    margin: 120px auto 20px;
    font-size: clamp(18px, 2.1vw, 32px);
    line-height: 1.5;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-style: italic;
    color: #b27d85;
  }

  .invitation-names {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    flex-wrap: wrap;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-style: italic;
    color: #c79b4d;
    font-size: clamp(34px, 4vw, 74px);
    line-height: 1.1;
    margin: 20px 0 0;
  }

  .and-sign {
    font-size: 0.7em;
  }

  .invitation-years {
    position: relative;
    z-index: 1;
    margin-top: 10px;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-style: italic;
    font-size: clamp(30px, 3vw, 54px);
    color: #b7872f;
  }

  .invitation-date {
    position: relative;
    z-index: 1;
    margin-top: 24px;
    font-size: clamp(22px, 2vw, 38px);
    letter-spacing: 0.06em;
    font-weight: 600;
    color: #b36972;
  }

  .invitation-confirmation {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 22px;
    font-size: clamp(22px, 2vw, 36px);
    font-style: italic;
    color: #c7707b;
  }

  .invitation-confirmation .quote {
    display: block;
    line-height: 1.1;
  }

  .invitation-confirmation .phone {
    font-size: clamp(28px, 2.6vw, 42px);
    color: #c7707b;
    margin-left: 8px;
  }

  .invitation-location {
    position: relative;
    z-index: 1;
    max-width: 760px;
    margin: 26px auto 0;
    font-size: clamp(22px, 2.2vw, 38px);
    line-height: 1.2;
    color: #b05f6d;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .invitation-guest {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .invitation-card {
      min-height: 720px;
      padding: 3rem 1.5rem 2rem;
    }

    .invitation-copy {
      margin-top: 96px;
    }

    .invitation-confirmation {
      gap: 10px;
    }
  }
`;

export const styWrapper = css``;
