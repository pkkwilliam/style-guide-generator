import React from "react";
import HorizontalDivider from "../horizontalDivider";
import Text from "../text";
import View from "../view";

export default function StyleGuide(props) {
  const { projectStyleGuide } = props;
  const { projectInfo, style } = projectStyleGuide;
  return (
    <View style={styles.container}>
      <ProjectInfo projectInfo={projectInfo} />
      <Style style={style} />
    </View>
  );
}

export function ProjectInfo({ projectInfo }) {
  const { color, company, name } = projectInfo;
  const { projectInfoHeader } = styles;
  return (
    <View style={styles.projectInfoContainer}>
      <Text style={{ color: color, ...projectInfoHeader }}>{name}</Text>
      <Text style={{ color: color, ...projectInfoHeader }}>{company}</Text>
    </View>
  );
}

export function Style({ style }) {
  const { backgrounds, buttons, colors, typographies } = style;
  const { styleContainer } = styles;
  return (
    <View style={styleContainer}>
      <StyleBackgrounds backgrounds={backgrounds} />
      <StyleColors colors={colors} />
      <StyleButtons buttons={buttons} />
      <StyleTypographies typographies={typographies} />
    </View>
  );
}

export function StyleBackgrounds({ backgrounds }) {
  const BackgroundsColors = backgrounds.map((background) => {
    const { color, type } = background;
    return (
      <View style={{ marginRight: 100 }}>
        <View
          style={{
            backgroundColor: color,
            border: "solid",
            borderColor: "#BBBBBB",
            borderWidth: 1,
            height: 100,
            width: 200,
          }}
        />
        <View style={{ flexDirection: "column", marginLeft: 18 }}>
          <Text style={{ fontWeight: 600 }}>{type}</Text>
          <Text style={{ marginTop: 8 }}>{color}</Text>
        </View>
      </View>
    );
  });
  return <StyleSection header="Backgrounds">{BackgroundsColors}</StyleSection>;
}

export function StyleButtons({ buttons }) {
  const Buttons = buttons.map((button) => {
    const {
      background,
      borderColor,
      borderRadius,
      color,
      fontSize = 16,
      fontWeight,
      type,
    } = button;
    return (
      <View style={{ marginRight: 38 }}>
        <button
          style={{
            background: background,
            border: "solid",
            borderColor: borderColor,
            borderRadius: borderRadius,
            borderWidth: 1,
            color: color,
            fontSize: fontSize,
            fontWeight: fontWeight,
            height: 50,
            width: 150,
            ...button,
          }}
        >
          <Text>{type}</Text>
        </button>
        <View style={{ flexDirection: "column", marginLeft: 18 }}>
          <Text style={{ fontWeight: 600 }}>{type}</Text>
          <TextField fieldName="Background">{background}</TextField>
          <TextField fieldName="Color">{color}</TextField>
          <TextField fieldName="Border Color">{borderColor}</TextField>
          <TextField fieldName="Border Radius">{borderRadius}</TextField>
          <TextField fieldName="Font Size">{fontSize}</TextField>
          <TextField fieldName="Font Weight">{fontWeight}</TextField>
        </View>
      </View>
    );
  });
  return (
    <StyleSection header="Buttons">
      {breakIntoSeparateLine(Buttons, 3)}
    </StyleSection>
  );
}

export function StyleColors({ colors }) {
  const Colors = colors.map((colorInput) => {
    const { color, type } = colorInput;
    return (
      <View style={{ marginRight: 100 }}>
        <View
          style={{
            backgroundColor: color,
            border: "solid",
            borderColor: "#BBBBBB",
            borderRadius: 90,
            borderWidth: 1,
            height: 80,
            width: 80,
          }}
        />
        <View style={{ flexDirection: "column", marginLeft: 18 }}>
          <Text style={{ fontWeight: 600 }}>{type}</Text>
          <Text style={{ marginTop: 8 }}>{color}</Text>
        </View>
      </View>
    );
  });
  return (
    <StyleSection header="Colors">
      {breakIntoSeparateLine(Colors, 4)}
    </StyleSection>
  );
}

export function StyleTypographies({ typographies }) {
  const Typography = typographies.map((typography) => {
    const { color, fontSize, fontWeight, type } = typography;
    return (
      <View style={{ marginBottom: 20 }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ ...typography }}>{type}</Text>
          <View>
            <TextField fieldName="Color">{color}</TextField>
            <TextField fieldName="Font Size">{fontSize}</TextField>
            <TextField fieldName="Font Weight">{fontWeight}</TextField>
          </View>
        </View>
      </View>
    );
  });
  return (
    <StyleSection header="Typographies">
      <View style={{ flexDirection: "column" }}>{Typography}</View>
    </StyleSection>
  );
}

function StyleSection({ children, header }) {
  const { styleSectionContainer, styleSectionHeader } = styles;
  return (
    <View style={styleSectionContainer}>
      <Text style={styleSectionHeader}>{header}</Text>
      <HorizontalDivider />
      <View style={{ marginTop: 20 }}>{children}</View>
    </View>
  );
}

function TextField({ children, fieldName }) {
  return (
    <View style={{ marginRight: 8 }}>
      <Text style={{ fontWeight: 600 }}>{`${fieldName}: `}</Text>
      <Text>{children}</Text>
    </View>
  );
}

function breakIntoSeparateLine(components, componentPerLine) {
  let result = [];
  let currentLine = [];
  const pushIntoResult = (components) => {
    result.push(<tr>{components}</tr>);
  };
  components.forEach((component, index) => {
    currentLine.push(<td>{component}</td>);
    if (currentLine.length === componentPerLine) {
      pushIntoResult(currentLine);
      currentLine = [];
    }
  });
  pushIntoResult(currentLine);
  return (
    <table style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}>
      {result}
    </table>
  );
}

const styles = {
  container: {
    backgroundColor: "#EFEFEF",
    flexDirection: "column",
    height: "inherit",
    padding: 38,
  },
  projectInfoContainer: {
    backgroundColor: "#F5F5F5",
    flexDirection: "column",
    padding: 50,
  },
  projectInfoHeader: {
    fontSize: 38,
    fontWeight: 900,
  },
  styleContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    padding: 50,
  },
  styleSectionContainer: {
    flexDirection: "column",
    marginTop: 30,
  },
  styleSectionHeader: {
    color: "#767676",
    marginBottom: 15,
    marginTop: 15,
    fontSize: 18,
    fontWeight: 400,
  },
};
