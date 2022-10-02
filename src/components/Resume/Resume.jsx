import styled from "styled-components";

const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledResumeItemContainer = styled.div`
  display: flex;
  flex-direction: column; 
  border: 2px dashed var(--green);
  border-radius: 10px;
  padding: 30px;
  text-align: left;
  
  div {
    margin: 0 auto;

    h2 {
      font-size: clamp(var(--fs-xxl), 4vw, var(--fs-heading));
      color: var(--lightest-slate);
      margin-bottom: 20px;
    }

    h5 {
      font-size: clamp(var(--fs-lg), 4vw, var(--fs-xl));
      color: var(--light-slate);
    }
    ul {
      li {
        font-size: clamp(var(--fs-sm),4vw,var(--fs-lg));
      }

      li:last-child {
        margin-bottom: 30px;
      }
    }
  }
`;

const StyledButton = styled.button`
  border: 3px solid var(--green);
  border-radius: 10px;
  background-color: transparent;
  padding: 20px;
  color: var(--white);
  margin: 0 auto;
`;

export default function Resume() {
  return (
    <section className='Resume' id='resume'>
      <h1 className='align-heading'>Prior Experience</h1>
      <StyledDivContainer>
        <StyledResumeItemContainer>
          <div>
            <h2>County of Santa Barbara, Auditor-Controller</h2>
            <span>2020-2022</span>
            <h5>Accountant-Auditor II, Internal Audit</h5>
            <ul>
              <li>Developed and implemented procedures to ensure County Departments met performance obligations</li>
              <li>Performed operational audits of County Departments</li>
              <li>Trained incoming staff on essential Microsoft Excel functions</li>
            </ul>
            <span>2018-2020</span>
            <h5>Accountant-Auditor I, Property Tax</h5>
            <ul>
              <li>Utilized Excel to perform property tax data analysis</li>
              <li>Perform operational audits of County Departments</li>
            </ul>
            <span>2017-2018</span>
            <h5>Financial Office Professional, Property Tax</h5>
            <ul>
              <li>Develop and implement procedures to ensure County Departments meet performance obligations</li>
              <li>Perform operational audits of County Departments</li>
              <li>Train incoming staff on essential Microsoft Excel functions</li>
            </ul>
            <div className='center-btn'>
              <StyledButton><a href='https://www.google.com/' target='_blank' rel='noopener noreferrer' >View Resume</a></StyledButton>
            </div>
          </div>
        </StyledResumeItemContainer>
      </StyledDivContainer>
    </section>
  );
}