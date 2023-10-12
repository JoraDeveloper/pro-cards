// TODO: Удалить @ts-nocheck

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Header from "@editorjs/header";
import List from "@editorjs/list";
import CodeBox from "@bomdi/codebox";
import ColorPlugin from "editorjs-text-color-plugin";
import Underline from "@editorjs/underline";
import AlignmentTuneTool from "editorjs-text-alignment-blocktune";
import Paragraph from "@editorjs/paragraph";
import SimpleImage from "@editorjs/simple-image";

// TODO: Переделать на TS

const createConfig = (holder: string | HTMLElement | undefined) => ({
  holder,
  autofocus: true,
  defaultBlock: "header",
  tools: {
    paragraph: {
      class: Paragraph,
      tunes: ["alignment"],
    },
    header: {
      class: Header,
      tunes: ["alignment"],
    },
    list: {
      class: List,
      tunes: ["alignment"],
    },
    image: {
      class: SimpleImage,
      tunes: ["alignment"],
    },
    code: {
      class: CodeBox,
      config: {
        themeName: "github",
      },
    },
    marker: {
      class: ColorPlugin,
      config: {
        type: "marker",
        defaultColor: "FFBF00",
      },
    },
    color: {
      class: ColorPlugin,
      config: {
        type: "text",
        colorCollections: [
          "#EC7878",
          "#9C27B0",
          "#673AB7",
          "#3F51B5",
          "#0070FF",
          "#03A9F4",
          "#00BCD4",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFF",
        ],
      },
    },
    underline: {
      class: Underline,
    },
    alignment: {
      class: AlignmentTuneTool,
      config: {
        default: "left",
        blocks: {
          image: "center",
        },
      },
    },
  },
});

export default createConfig;
