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
  const { company, name } = projectInfo;
  const { projectInfoHeader } = styles;
  return (
    <View style={styles.projectInfoContainer}>
      <Text style={projectInfoHeader}>{name}</Text>
      <Text style={projectInfoHeader}>{company}</Text>
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
  return <StyleSection header="Buttons"></StyleSection>;
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
  return <StyleSection header="Colors">{Colors}</StyleSection>;
}

export function StyleTypographies({ typographies }) {
  return <StyleSection header="Typographies"></StyleSection>;
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
    color: "#FF357B",
    fontSize: 38,
    fontWeight: 900,
  },
  styleContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    padding: "30px 30px",
  },
  styleSectionContainer: {
    flexDirection: "column",
    marginTop: 80,
  },
  styleSectionHeader: {
    color: "#767676",
    marginBottom: 15,
    marginTop: 15,
    fontSize: 18,
    fontWeight: 400,
  },
};
