import { toRefs, reactive, } from 'vue'

import $apis from "../helper/apis.js";
import marked from "../components/marked.esm.js";

const gDefaultSentence = [
  {
    _id: "5b279f0f3bd7ef3847a3fadb",
    content:
      "我走过山时，山不说话，我路过海时，海不说话，小毛驴滴滴答答，倚天剑伴我走天涯。大家都说我因为爱着杨过大侠，才在峨嵋山上出了家，其实我只是爱上了峨嵋山上的云和霞，像极了十六岁那年的烟花。",
    type: "aestheticism",
    createdBy: "admin",
    modifyTime: "2018-06-18T11:58:03.164Z",
    createTime: "2018-06-18T11:58:03.164Z",
    active: true,
    __v: 0,
  },
];

export default (options) => {
  const { pageSize } = options

  const state = reactive({
    sentencesArr: {},
    error: false,
    loading: false,
  })

  const asseemble = (params) => {
    return params.map((item) => {
      return {
        _id: item._id,
        type: item.type,
        content: marked(item.content, {}).replace(/<[^>]*>/g, ""),
      };
    });
  }

  const request = () => {
    state.loading = true;
    const params = {
      pageCount: 1,
      pageSize: pageSize,
      sortType: -1,
      sortTarget: "createTime",
      active: true,
    };
    $apis
      .getSentences(params)
      .then((result) => {
        state.sentencesArr = asseemble(result);
      })
      .catch((error) => {
        state.sentencesArr = gDefaultSentence
        state.error = true;
      })
      .finally(() => {
        state.loading = false;
      });
  };

  const updateBgColor = () => {
    const bodyNode = document.querySelector("body");
    bodyNode.classList = `amp-mode-mouse amp-mode-touch`;
  }

  return {
    request,
    updateBgColor,
    ...toRefs(state)
  }
}