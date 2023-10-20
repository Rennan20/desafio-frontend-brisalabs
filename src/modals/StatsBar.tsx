import styled from "styled-components";

const StatsBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StatName = styled.div`
  width: 16px;
  text-align: right;
  color: #525150;
  font-family: "Poppin", "sans-serif";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StatBar = styled.div`
  width: 244px;
  height: 9px;
  background-color: #f3f3f3;
  border-radius: 8px;
  margin-right: 11px;
  margin-left: 34px;
`;

const FilledBar = styled.div<{ width?: number }>`
  width: ${(props) => props.width || 0}px;
  height: 100%;
  background-color: var(--color-primary);
  border-radius: 8px;
`;

const StatValue = styled.div`
  color: var(--color-grey-400);
  text-align: right;
  font-family: "Poppins", "sans-serif";
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

interface StatsBarProps {
  name: string;
  value: number;
  maxValue: number;
  width: number;
}

const StatsBar = ({ name, value, maxValue, width }: StatsBarProps) => {
  const filledWidth = (value / maxValue) * 244;

  return (
    <StatsBarContainer>
      <StatName>{name}</StatName>
      <StatBar>
        <FilledBar width={filledWidth} />
      </StatBar>
      <StatValue>{value}</StatValue>
    </StatsBarContainer>
  );
};

export default StatsBar;
