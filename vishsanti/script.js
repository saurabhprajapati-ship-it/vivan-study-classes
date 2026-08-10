const STORAGE_KEY = "vishsanti_edits_v1";
const THEME_KEY = "smartClassTheme";
const STICKER_KEY  = "vishsanti_stickers_v1";

const STICKER_CATEGORIES = [
  {
    id: "smartclass", label: "🎓 Class",
    emojis: ["VVI 🔥", "IMP! ⚠️", "TARGET 450+", "TARGET 400+", "TARGET 350+", "LIVE 🔴", "Vivan Spl 👑", "Vivan Study 🎓", "Vivan Study Classes 📚", "Vivan Classes 🌟", "Vivan Special ✨", "H.W. 📝", "NOTE 📌", "BOARD EXAM", "V. Imp", "EXAM 2026"]
  },
  {
    id: "stars", label: "⭐ Stars",
    emojis: ["⭐", "🌟", "✨", "💫", "🌠", "⚡", "🎇", "🎆"]
  },
  {
    id: "happy", label: "😊 Smileys",
    emojis: [
      "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤫", "🤔", "🤐", "😐", "😑", "😶", "😬", "🤥", "😴", "😪", "🤤", "🥱", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥴", "😵", "😵‍💫", "🤠", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😸", "😹", "😺", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊"
    ]
  },
  {
    id: "hearts", label: "❤️ Hearts",
    emojis: [
      "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "💌", "💋"
    ]
  },
  {
    id: "hands", label: "👋 Hands",
    emojis: [
      "👍", "👎", "👊", "✊", "🤛", "🤜", "🤞", "✌️", "🤟", "🤘", "👌", "👈", "👉", "👆", "👇", "☝️", "✋", "🤚", "🖐️", "🖖", "👋", "🤙", "👏", "🙌", "👐", "🤲", "🙏", "✍️", "💅", "🤳", "💪", "🦵", "🦶", "👂", "👃", "🧠", "🦷", "🦴", "👀", "👁️", "👅", "👄"
    ]
  },
  {
    id: "weather", label: "🌤️ Weather",
    emojis: [
      "☀️", "🌤️", "⛅", "🌥️", "☁️", "🌦️", "🌧️", "⛈️", "🌩️", "🌨️", "❄️", "☃️", "⛄", "🌬️", "💨", "🌪️", "🌫️", "🌈", "☔", "☂️", "🌂", "⚡", "🌀", "🪐", "🌍", "🌎", "🌏", "🌟", "⭐", "✨", "💫", "🌠", "🌌", "🌙", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌚", "🌝", "🌛", "🌜", "🌡️"
    ]
  },
  {
    id: "misc", label: "🎈 Fun",
    emojis: [
      "🔔", "📢", "📣", "🏆", "🥇", "🎖️", "🏅", "👑", "🚀", "💡", "📚", "🎯", "💎", "💯", "💢", "💥", "💫", "💦", "🕳️", "💣", "💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤"
    ]
  },
  {
    id: "shapes", label: "📐 Shapes",
    emojis: [
      "➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "⭕", "🔴", "🟢", "🔵", "🟡", "⬛", "🔲", "🔳", "📌", "📍", "🔺", "🔻", "▪️", "▫️", "💠", "✔️", "❌", "⚪"
    ]
  }
];

const STICKER_TEMPLATES = [
  {
    id: "welldone", label: "⭐ Well Done!",
    stickers: [
      { emoji: "⭐", x: 45, y: 10, size: 56 },
      { emoji: "⭐", x: 50, y: 8,  size: 64 },
      { emoji: "⭐", x: 55, y: 10, size: 56 }
    ]
  },
  {
    id: "important", label: "🔥 Important!",
    stickers: [
      { emoji: "🔥", x: 48, y: 10, size: 52, animation: "pulse" },
      { emoji: "⚠️", x: 52, y: 10, size: 48 }
    ]
  },
  {
    id: "excellent", label: "✅ Excellent!",
    stickers: [
      { emoji: "🏆", x: 48, y: 10, size: 64, animation: "bounce" },
      { emoji: "✅", x: 52, y: 12, size: 48 }
    ]
  },
  {
    id: "remember", label: "📌 Remember",
    stickers: [
      { emoji: "📌", x: 6,  y: 6,  size: 44 }
    ]
  },
  {
    id: "loveit", label: "❤️ Love It",
    stickers: [
      { emoji: "❤️", x: 45, y: 12, size: 42 },
      { emoji: "💖", x: 50, y: 8,  size: 54, animation: "pulse" },
      { emoji: "❤️", x: 55, y: 12, size: 42 }
    ]
  },
  {
    id: "focus", label: "🎯 Focus Here",
    stickers: [
      { emoji: "🎯", x: 50, y: 50, size: 80, animation: "glow" }
    ]
  }
];

const TINT_COLORS = [
  { id: "none",   label: "None",   hex: null },
  { id: "red",    label: "Red",    hex: "#ef4444" },
  { id: "green",  label: "Green",  hex: "#22c55e" },
  { id: "blue",   label: "Blue",   hex: "#3b82f6" },
  { id: "yellow", label: "Yellow", hex: "#eab308" },
  { id: "purple", label: "Purple", hex: "#a855f7" },
  { id: "cyan",   label: "Cyan",   hex: "#06b6d4" },
  { id: "orange", label: "Orange", hex: "#f97316" },
  { id: "pink",   label: "Pink",   hex: "#ec4899" }
];

const ANIM_OPTIONS = [
  { id: "none",   label: "None" },
  { id: "pulse",  label: "💓 Pulse" },
  { id: "bounce", label: "⬆️ Bounce" },
  { id: "glow",   label: "✨ Glow" },
  { id: "spin",   label: "🔄 Spin" },
  { id: "shake",  label: "📳 Shake" }
];

const themes = [
  { id: "royal", name: "Royal Blue" },
  { id: "black", name: "Pure Black" },
  { id: "green", name: "Vivan Green" },
  { id: "cyber", name: "Cyber Dark" },
  { id: "gold", name: "Warm Gold" }
];

const vocabDictionary = {
    "संस्काराः": "जीवन को पवित्र बनाने वाले धार्मिक कृत्य एवं अनुष्ठान",
    "षोडश": "सोलह (16)",
    "जन्मपूर्वाः": "जन्म से पूर्व सम्पादित होने वाले संस्कार",
    "शैशवाः": "बाल्यावस्था/शिशुकालीन संस्कार",
    "शैक्षणिक": "शिक्षा काल के संस्कार",
    "गृहस्थः": "परिवार एवं वैवाहिक आश्रम",
    "मरणोत्तरः": "मृत्यु के पश्चात् किया जाने वाला दाह संस्कार",
    "अन्त्येष्टिः": "दाह संस्कार / अन्तिम कृत्य",
    "व्यङ्ग्यरूपम्": "उपहास अथवा व्यङ्ग्य का रूप",
    "प्रयुज्यते": "प्रयोग किया जाता है",
    "दोषापनयनम्": "अवगुणों एवं दोषों का निवारण",
    "गुणाधानम्": "नए सद्गुणों का समावेश",
    "योगदानम्": "सहयोग अथवा भूमिका",
    "स्मरन्ति": "स्मरण करते हैं / याद करते हैं",
    "परिमार्जयन्ति": "परिष्कार एवं शुद्ध करते हैं",
    "कल्पयन्ति": "कल्पना करते हैं / रचना करते हैं",
    "ऋषयः": "प्राचीन ज्ञानी मुनिजन",
    "वरिष्ठानाम्": "ज्येष्ठ एवं श्रेष्ठ पुरुषों का",
    "आशीर्वादाः": "मङ्गल आशीर्वाद",
    "प्रयोजनेषु": "शुभ अवसरों एवं अनुष्ठानों में",
    "वेदमन्त्राणाम्": "वैदिक मन्त्रों का",
    "पाठः": "वाचन अथवा उच्चारण",
    "हवनम्": "यज्ञ कुण्ड में आहुति देना",
    "अन्तेवासी": "गुरु के आश्रम में साथ रहने वाला शिष्य",
    "गर्भाधानम्": "गर्भ धारण हेतु प्रथम संस्कार",
    "पुंसवनम्": "गर्भ रक्षा एवं बलवान पुत्र प्राप्ति संस्कार",
    "सीमन्तोन्नयनम्": "गर्भवती माता की प्रसन्नता हेतु संस्कार",
    "जातकर्म": "बालक के जन्म पर किया जाने वाला मांगलिक कृत्य",
    "नामकरणम्": "बालक का मांगलिक नाम रखने की क्रिया",
    "निष्क्रमणम्": "बालक को प्रथम बार घर से बाहर लाने की क्रिया",
    "अन्नप्राशनम्": "बालक को पहली बार अन्न चटाने का कृत्य",
    "चूड़ाकर्म": "बालक के सिर के प्रथम बाल कटवाने की क्रिया (मुण्डन)",
    "कर्णवेधः": "बालक या बालिका के कान छेदने का कृत्य",
    "अक्षरारम्भः": "पहली बार अक्षर एवं अंक लिखना सीखने का संस्कार",
    "उपनयनम्": "गुरु द्वारा शिष्य को अपने समीप ले जाने का संस्कार (जनेऊ)",
    "वेदारम्भः": "गुरुकुल में वेदों का अध्ययन प्रारम्भ करना",
    "केशान्तः": "प्रथम दाढ़ी-मूँछ कटवाने का संस्कार (गोदान)",
    "समावर्तनम्": "शिक्षा समाप्ति पर गृहस्थ जीवन में लौटने का संस्कार",
    "वाग्दानम्": "कन्या पक्ष एवं वर पक्ष द्वारा सगाई/वचन देना",
    "मण्डपनिर्माणम्": "विवाह हेतु मण्डप सजाना",
    "कन्यादानम्": "पिता द्वारा कन्या का वर को समर्पण",
    "अग्निस्थापनम्": "विवाह मण्डप में पवित्र यज्ञ-अग्नि की स्थापना",
    "लाजाहोमः": "धान की कीलें (लावा) अग्नि में अर्पित करना",
    "सप्तपदी": "पवित्र अग्नि के चारों ओर सात फेरे चलना",
    "पाणिग्रहणम्": "वर द्वारा वधू का हाथ थामने का वचन",
    "सिन्दूरदानम्": "वधू की माँग में सिन्दूर भरना",
    "गायन्ति": "गान करते हैं / प्रशंसा करते हैं",
    "देवाः": "सुरलोक के देवगण",
    "किल": "निश्चय ही / वास्तव में",
    "गीतकानि": "मनोहर गीत एवं स्तवन",
    "धन्याः": "परम भाग्यशाली एवं धन्य",
    "भारतभूमिभागे": "भारत की पवित्र भूमि के भाग में",
    "स्वर्गापवर्गास्पदहेतुभूते": "स्वर्ग एवं मोक्ष प्रदान करने की साधन स्वरूप",
    "भवन्ति": "होते हैं / बनते हैं",
    "भूयः": "पुनः / बार-बार",
    "सुरत्वात्": "देवत्व के पुण्य प्रभाव से",
    "अहो": "अहो! (आश्चर्य बोधक पद)",
    "अमीषाम्": "इन मनुष्यों का",
    "किमकारि": "कौन-सा ऐसा महान् कृत्य किया गया",
    "शोभनम्": "सुन्दर एवं कल्याणकारी",
    "प्रसन्नः": "परम सन्तुष्ट एवं कृपालु",
    "एषाम्": "इन पर",
    "स्वयम्": "साक्षात्",
    "हरिः": "सर्वेश्वर भगवान् विष्णु / श्रीहरि",
    "लब्धम्": "प्राप्त हुआ है",
    "नृषु": "मनुष्यों में",
    "भारतराजिरे": "भारतवर्ष रूपी श्रेष्ठ आँगन में",
    "मुकुन्दसेवौपयिकम्": "भगवान् मुकुन्द (श्रीहरि) की सेवा के योग्य",
    "स्पृहा": "तीव्र अभिलाषा / इच्छा",
    "नः": "हमारी (देवताओं की)",
    "विशाला": "अत्यन्त विशाल एवं विस्तृत",
    "अस्मदीया": "हमारी",
    "धरा": "मातृभूमि / पृथ्वी",
    "निर्मला": "स्वच्छ, पावन एवं निष्कलंक",
    "वत्सला": "ममतामयी माता के समान",
    "वसद्भिः": "निवास करने वाले निवासियों द्वारा",
    "भिन्नैः": "विविध प्रकार के",
    "धर्मजातिप्रभेदैः": "धर्मों एवं जातियों के भेदों से युक्त होकर भी",
    "एकत्वभावम्": "एकता की अभिन्न भावना",
    "वहन्तः": "धारण करते हुए",
    "वसन्ति": "निवास करते हैं",
    "सेविता": "सदा पूजित एवं अलंकृत",
    "सागरैः": "महासागरों द्वारा",
    "उत्तङ्गतरङ्गैः": "ऊँची-ऊँची उत्ताल तरंगों वाली",
    "वनैः": "हरे-भरे सघन वनों द्वारा",
    "पर्वतैः": "विशाल गगनचुम्बी पर्वतों द्वारा",
    "निर्झरैः": "शीतल एवं निर्मल झरनों द्वारा",
    "वहन्तीभिः": "निरन्तर प्रवाहित होने वाली",
    "शुभानि": "कल्याणकारी जल वाली",
    "जगद्गौरवम्": "सम्पूर्ण विश्व का गौरव",
    "शोभनीयम्": "अत्यन्त दर्शनीय एवं सुन्दर",
    "पूजनीयम्": "परम आदर एवं वन्दना के योग्य",
    "देशभक्तिः": "राष्ट्र के प्रति अनन्य प्रेम एवं निष्ठा",
    "आदर्शरूपा": "परम श्रेष्ठ एवं अनुकरणीय",
    "आवर्जनीया": "दूसरों का हृदय जीत लेने वाली आदरणीय",
    "यस्य": "जिसका / जिस मनुष्य का",
    "कृत्यम्": "कर्तव्य / कार्य",
    "विघ्नन्ति": "बाधित या नष्ट करते हैं",
    "शीतम्": "अत्यधिक ठण्ड / सर्दी",
    "उष्णम्": "अत्यधिक गर्मी / ताप",
    "भयम्": "डर / त्रास",
    "रतिः": "सांसारिक काम-अनुराग / आसक्ति",
    "समृद्धिः": "अत्यधिक धन-सम्पदा / उन्नति",
    "असमृद्धिः": "निर्धनता / विपत्ति",
    "पण्डितः": "परम ज्ञानी / विद्वान्",
    "उच्यते": "कहा जाता है",
    "तत्त्वज्ञः": "मर्म/सत्य को जानने वाला",
    "सर्वभूतानाम्": "समस्त प्राणियों का",
    "योगज्ञः": "कार्य सम्पादन की विधि जानने वाला",
    "सर्वकर्मणाम्": "समस्त कर्मों का",
    "उपायज्ञः": "समाधान एवं उपायों को जानने वाला",
    "मनुष्याणाम्": "मानव समाज का",
    "अनाहूतः": "बिना बुलाए / बिना आमन्त्रण के",
    "प्रविशति": "प्रवेश करता है",
    "अपृष्टः": "बिना पूछे",
    "बहु": "अत्यधिक / अनर्गल",
    "भाषते": "बोलता है / बकबक करता है",
    "अविश्वस्ते": "अविश्वासी / कपटी मनुष्य पर",
    "विश्वसिति": "अंधविश्वास करता है",
    "मूढचेता": "मूर्ख बुद्धि वाला",
    "नराधमः": "मनुष्यों में नीच/अधम",
    "श्रेयः": "कल्याण / हित",
    "क्षमा": "सहनशीलता / क्षमा भाव",
    "शान्तिः": "मन की शान्ति",
    "उत्तमा": "सर्वोत्कृष्ट",
    "तृप्तिः": "आन्तरिक सन्तोष",
    "अहिंसा": "जीव-हिंसा न करना",
    "सुखावहा": "परम सुख देने वाली",
    "हातव्याः": "त्याग देने योग्य",
    "भूतिम्": "ऐश्वर्य / उन्नति / प्रगति",
    "इच्छता": "चाहने वाले द्वारा",
    "निद्रा": "अत्यधिक सोना",
    "तन्द्रा": "काम के समय ऊँघना / सुस्ती",
    "क्रोधः": "गुस्सा / आवेश",
    "आलस्यम्": "काम न करने का आलस्य",
    "दीर्घसूत्रता": "आज का काम कल पर टालना",
    "त्रिणि": "तीन (3)",
    "नरकस्य": "नरक का",
    "द्वारम्": "दरवाजा / मार्ग",
    "नाशनम्": "सर्वनाश करने वाला",
    "आत्मनः": "स्वयं का / आत्मा का",
    "कामः": "अनियन्त्रित वासना",
    "लोभः": "अत्यधिक लालच",
    "तस्मात्": "इसलिए",
    "त्रयम्": "तीनों को",
    "त्यजेत्": "छोड़ देना चाहिए",
    "सत्येन": "सत्य के द्वारा",
    "रक्ष्यते": "रक्षा होती है",
    "मृजया": "स्वच्छता / उबटन / स्नान से",
    "रूपम्": "शरीर का सौन्दर्य",
    "कुलम्": "वंश का गौरव",
    "वृत्तेन": "उत्तम चरित्र एवं सदाचार से",
    "सुलभाः": "आसानी से मिलने वाले",
    "सततम्": "सदा / निरन्तर",
    "प्रियवादिनः": "मीठा बोलने वाले चाटुकार",
    "अप्रियस्य": "कड़वी बातें",
    "पथ्यस्य": "परिणाम में हितकारी",
    "वक्ता": "बोलने वाला",
    "श्रोता": "सुनने वाला",
    "दुर्लभः": "कठिनाई से मिलने वाला",
    "कर्मवीरः": "अपने परिश्रम से सफलता पाने वाला वीर",
    "बिहारराज्यस्य": "बिहार राज्य का",
    "दुर्गमे": "पहुँच से दूर / बीहड़",
    "प्रान्ते": "क्षेत्र / अंचल में",
    "अतिनिर्धनाः": "अत्यधिक गरीब",
    "शिक्षाविहीनाः": "अनपढ़ / अशिक्षित",
    "क्लिश्टजीवनाः": "कष्टप्रद जीवन जीने वाले",
    "जनाः": "लोग",
    "परिवारः": "कुटुम्ब",
    "ग्रामात्": "गाँव से",
    "बहिः": "बाहर",
    "कुटीयाम्": "झोपड़ी में",
    "न्यवसत्": "रहता था",
    "जीर्णत्वात्": "पुरानी / जर्जर होने के कारण",
    "आतपवारणम्": "धूप से रक्षा",
    "वृष्टिवारणम्": "वर्षा से बचाव",
    "गृहस्वामी": "घर का मालिक / पिता",
    "भार्या": "पत्नी",
    "दुहिता": "पुत्री",
    "क्रोशमात्रम्": "एक क्रोश (3 किमी) की दूरी पर",
    "दूरे": "दूर",
    "प्राथमिको": "प्राथमिक",
    "प्रशासनेन": "सरकार द्वारा",
    "स्थापितः": "बनाया गया",
    "नवीनदृष्टिसम्पन्नः": "नए विचारों से युक्त",
    "सामाजिकसमरसताप्रियः": "समाज में समानता चाहने वाला",
    "शिक्षकः": "अध्यापक",
    "समागतः": "जागृत हुई",
    "खेलनरतम्": "खेल में मग्न",
    "बालकम्": "बच्चे को",
    "विलोक्य": "देखकर",
    "सहजलीलाकृष्टः": "स्वभाव से आकर्षित होकर",
    "स्वविद्यालयमानीय": "अपने विद्यालय लाकर",
    "शिक्षितुमारेभत": "पढाना प्रारम्भ किया",
    "शिक्षणशैल्याकृष्टः": "शिक्षण प्रणाली से प्रभावित होकर",
    "तपः": "तपस्या",
    "मनसि": "मन में",
    "धारयन्": "धारण करते हुए",
    "अभ्यासेन": "अभ्यास से",
    "महद्": "विशाल / बड़ा",
    "अवाप": "प्राप्त किया",
    "छात्रवृत्त्या": "स्कॉलरशिप से",
    "कनीयसाम्": "छोटे बालकों को",
    "शिक्षणलब्धेन": "ट्यूशन से प्राप्त धन से",
    "धनेन": "पैसे से",
    "नगरमहाविद्यालये": "नगर के कॉलेज में",
    "प्रवेशम्": "दाखिला",
    "लभत": "प्राप्त किया",
    "स्नातकपरीक्षायाम्": "स्नातक (B.A.) परीक्षा में",
    "प्रथमस्थानमप्याप": "प्रथम स्थान हासिल किया",
    "केन्द्रीयलोकसेवापरीक्षायाम्": "UPSC परीक्षा में",
    "उन्नतम्": "उच्च / शीर्ष",
    "साक्षात्कारे": "इंटरव्यू में",
    "बोर्डसदस्याः": "बोर्ड के सदस्य",
    "व्यापकेन": "विस्तृत / अगाध",
    "ज्ञानेन": "ज्ञान से",
    "प्रीताः": "प्रसन्न",
    "अभवन्": "हुए",
    "उद्योगिनम्": "परिश्रमी व्यक्ति को",
    "पुरुषसिंहम्": "पुरुषों में सिंह समान कर्मवीर को",
    "उपैति": "प्राप्त होती है / वरण करती है",
    "लक्ष्मीः": "समृद्धि एवं सफलता",
    "उद्धारकाः": "समाज का उद्धार करने वाले",
    "संस्थापकः": "संस्थापक",
    "ग्रामे": "गाँव में",
    "अभविष्टम्": "हुआ था",
    "मूलशङ्करः": "मूलशङ्कर",
    "कर्मकाण्डी": "धार्मिक पूजा-पाठ करने वाला",
    "शिवोपासकः": "भगवान् शिव का भक्त",
    "आसीत्": "था",
    "महाशिवरात्रिपर्वणि": "महाशिवरात्रि के पर्व पर",
    "रात्रिजागरणम्": "रात भर जगना (जागरण)",
    "कुर्वति": "करते हुए",
    "दृष्टम्": "देखा गया",
    "मूषकः": "चूहा",
    "शिवलिङ्गम्": "शिव प्रतिमा पर",
    "आरुह्य": "चढ़कर",
    "अर्पितानि": "चढ़ाए गए",
    "द्रव्याणि": "मोदक / प्रसाद",
    "भक्षयति": "खा रहा है",
    "विग्रहपूजाम्": "मूर्तिपूजा के प्रति",
    "अनास्था": "अविश्वास / विरक्ति",
    "जाता": "उत्पन्न हुई",
    "वर्षद्वयाभ्यन्तरे": "दो वर्ष के भीतर",
    "प्रियभगिन्याः": "प्रिय बहन की",
    "पितृव्यस्य": "चाचा की",
    "मरणम्": "मृत्यु",
    "सञ्जातम्": "हो गई",
    "वैराग्यभावः": "वैराग्य की भावना",
    "गृहम्": "घर",
    "त्यक्त्वा": "छोड़कर / त्यागकर",
    "विभिन्नानाम्": "विभिन्न",
    "विदुषाम्": "विद्वानों के",
    "सद्साधुनाम्": "सच्चे साधुओं के",
    "सङ्गे": "संगति में",
    "रममाणः": "रमते हुए",
    "मथुरायाम्": "मथुरा में",
    "प्रज्ञाचक्षुषः": "प्रज्ञाचक्षु (नेत्रहीन) विद्वान्",
    "विराजानन्दस्य": "विराजानन्द जी के",
    "समीपम्": "पास",
    "अगच्छत्": "गए",
    "आर्षग्रन्थानाम्": "आर्ष (वैदिक) ग्रन्थों का",
    "प्रारभत": "प्रारम्भ किया",
    "उपदेशात्": "उपदेश से",
    "वैदिकधर्मस्य": "वैदिक धर्म का",
    "प्रचाराय": "प्रचार हेतु",
    "स्वजीवनम्": "अपना जीवन",
    "समर्पितवान्": "समर्पित कर दिया",
    "अज्ञानान्धकारम्": "अज्ञान का अँधेरा",
    "दूरीकृत्य": "दूर करके",
    "सत्यार्थप्रकाश": "सत्यार्थ प्रकाश नामक ग्रन्थ",
    "राष्ट्रभाषायाम्": "राष्ट्रभाषा हिन्दी में",
    "रचयित्वा": "रचकर",
    "महान्तम्": "महान्",
    "उपकारम्": "उपकार / हित",
    "चकार": "किया",
    "न्यवर्तन्त": "लौटने का आह्वान किया",
    "स्त्रीशिक्षा": "महिलाओं की पढ़ाई",
    "विधवापुनर्विवाह": "विधवा पुनर्विवाह",
    "अस्पृश्यतानिवारणम्": "छुआछूत का विरोध",
    "स्थापनाम्": "स्थापना",
    "अकरोत्": "की",
    "निधनम्": "देहावसान / मृत्यु",
    "स्मृतौ": "उनकी याद में",
    "अनुयायिभिः": "शिष्यों द्वारा",
    "श्रृङ्खला": "श्रृंखला / नेटवर्क",
    "प्रारब्धा": "प्रारम्भ की गई"
};

const state = {
  slides: [],
  index: 0,
  panel: null,
  saveTimer: null,
  theme: localStorage.getItem(THEME_KEY) || "royal",
  
  // Quiz states
  flatMCQs: [],

  // Sticker states
  stickers: {},
  selectedStickerId: null,
  activeStickerCategory: "smartclass"
};

const els = {
  content: document.getElementById("slideContent"),
  slideMeter: document.getElementById("footerMeter"), // Footer slide meter
  progress: document.getElementById("progressFill"),
  prev: document.getElementById("prevBtn"),
  next: document.getElementById("nextBtn"),
  fullscreen: document.getElementById("fullscreenBtn"),
  panel: document.getElementById("sidePanel"),
  panelTitle: document.getElementById("panelTitle"),
  panelEyebrow: document.getElementById("panelEyebrow"),
  panelBody: document.getElementById("panelBody"),
  closePanel: document.getElementById("closePanel"),
  railButtons: document.querySelectorAll(".rail-button[data-panel]")
};

document.body.dataset.theme = themes.some((theme) => theme.id === state.theme) ? state.theme : "royal";
updateSmartScale();

async function loadSlides() {
  try {
    const response = await fetch("slides.json", { cache: "no-store" });
    if (!response.ok) throw new Error("slides.json not found");
    state.slides = await response.json();
    
    // Initialize questions list
    initializeFlatMCQs();
    applySavedEdits();
    loadQuestionStates();
    loadStickers();
    
    renderSlide();
  } catch (error) {
    els.content.innerHTML = "<p class=\"teaching-line\">Presentation को local server से खोलें ताकि slides.json load हो सके।</p>";
  }
}

function initializeFlatMCQs() {
  state.flatMCQs = [];
  state.slides.forEach((slide, slideIdx) => {
    if (slide.isCover) return;
    if (slide.mcqs && slide.mcqs.length) {
      slide.mcqs.forEach((mcq, mcqIdx) => {
        state.flatMCQs.push({
          slideIndex: slideIdx,
          mcqIndex: mcqIdx,
          mcq: mcq,
          id: state.flatMCQs.length + 1,
          status: "unanswered"
        });
      });
    }
  });
}

function saveQuestionStates() {
  // No-op to match karnsdanvirta behaviour (no persistence of MCQs to localStorage)
}

function loadQuestionStates() {
  // No-op to match karnsdanvirta behaviour (no persistence of MCQs to localStorage)
}

function applySavedEdits() {
  const edits = readStoredEdits();
  state.slides.forEach((slide) => {
    const editedContent = edits[String(slide.id)];
    if (editedContent) {
      slide.content = editedContent;
    }
  });
}

function readStoredEdits() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function persistSlideContent(slide) {
  const edits = readStoredEdits();
  edits[String(slide.id)] = slide.content;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(edits));
}

function renderSlide() {
  if (state.slides.length === 0) return;
  const slide = currentSlide();
  renderSlideContentOnly(slide);

  const total = state.slides.length;
  // Footer Meter shows e.g., "1/8"
  if (els.slideMeter) {
    els.slideMeter.textContent = `${state.index + 1}/${total}`;
    els.slideMeter.setAttribute("aria-label", `Slide ${state.index + 1} of ${total}`);
  }
  els.progress.style.width = `${((state.index + 1) / total) * 100}%`;
  els.prev.disabled = state.index === 0;
  els.next.disabled = state.index === total - 1;

  if (state.panel) renderPanel(state.panel);

  state.selectedStickerId = null;
  renderStickersOnSlide();
}

function currentSlide() {
  return state.slides[state.index];
}

function renderSlideContentOnly(slide) {
  let html = "";
  
  // Render Premium Cover Slide if isCover, cover, or id === 1
  if (slide.isCover || slide.cover || slide.id === 1) {
    const titleVal = slide.title || "पाठ परिचय";
    const subVal = slide.authorSubtitle || slide.subtitle || "";
    const authorVal = slide.author || "";
    const descVal = slide.description || slide.intro || "";
    const introVal = slide.introText || slide.highlights || "";

    html = `
      <div class="cover-slide-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: clamp(20px, calc(30px * var(--smart-scale)), 50px); max-width: 900px; margin: 0 auto; gap: clamp(16px, calc(24px * var(--smart-scale)), 36px);">
        <header class="cover-header" style="animation: fadeInUp 0.6s ease;">
          <h1 class="cover-title" style="font-size: clamp(32px, calc(48px * var(--smart-scale)), 64px); font-weight: 900; margin: 0; background: linear-gradient(135deg, #fff, var(--accent-2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1.45; padding: 12px 0;">
            ${titleVal}
          </h1>
        </header>
        
        ${(subVal || authorVal) ? `
        <div class="cover-author-card" style="animation: fadeInUp 0.8s ease; display: flex; flex-direction: column; gap: 4px; padding: 12px 24px; border-radius: 12px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(var(--accent-2-rgb), 0.2);">
          ${subVal ? `<span style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-2); font-weight: 800;">${subVal}</span>` : ""}
          ${authorVal ? `<h3 style="font-size: clamp(20px, calc(26px * var(--smart-scale)), 36px); font-weight: 800; margin: 0; color: #fff;">${authorVal}</h3>` : ""}
        </div>
        ` : ""}
        
        ${descVal ? `
        <div class="cover-desc-box" style="animation: fadeInUp 1s ease; border-left: 4px solid var(--accent); padding: 8px 18px; text-align: left; background: rgba(var(--accent-rgb), 0.04); border-radius: 0 12px 12px 0; width: 100%;">
          <p style="font-size: clamp(16px, calc(19px * var(--smart-scale)), 24px); line-height: 1.6; margin: 0; color: var(--muted);">${descVal}</p>
        </div>
        ` : ""}
        
        ${introVal ? `
        <div class="cover-overview-box" style="animation: fadeInUp 1.1s ease; display: flex; align-items: flex-start; gap: 12px; padding: 16px 20px; border-radius: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); text-align: left; width: 100%;">
          <span style="font-size: 28px; line-height: 1;">📖</span>
          <p style="font-size: clamp(16px, calc(18px * var(--smart-scale)), 22px); line-height: 1.55; margin: 0; color: var(--ink);">${introVal}</p>
        </div>
        ` : ""}
        
        <button class="pulsing-gradient-btn" style="animation: fadeInUp 1.2s ease; margin-top: 10px; cursor: pointer; border: none; outline: none; border-radius: 30px; font-weight: 900; color: #fff; padding: 14px 44px; font-size: clamp(18px, calc(22px * var(--smart-scale)), 28px); transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(var(--accent-rgb), 0.3); background: linear-gradient(135deg, var(--accent), var(--accent-2));" onclick="goToSlide(1)">
          पाठ शुरू करें
        </button>
      </div>
    `;
    els.content.innerHTML = html;
    
    const newContent = els.content.cloneNode(true);
    els.content.parentNode.replaceChild(newContent, els.content);
    els.content = newContent;
    return;
  }

  // Build normal text layout
  let textHtml = "";
  if (slide.title) {
    textHtml += `<h2 class="slide-title">${slide.title}</h2>`;
  }
  
  if (Array.isArray(slide.content)) {
    slide.content.forEach((line) => {
      const cleanLine = line.trim();
      if (!cleanLine) return;
      
      const isPoetrySlide = Array.isArray(slide.content) && slide.content.some(l => {
        const cl = l.trim();
        return cl.includes("॥") || (cl.includes("।") && cl.length < 60);
      });
      
      const isShloka = cleanLine.includes("॥") || 
                       (cleanLine.includes("।") && cleanLine.length < 75) ||
                       (isPoetrySlide && cleanLine.length < 80);
      
      // Process text to insert vocabulary tooltips
      const processedLine = wrapVocabularyWords(cleanLine);
      
      if (isShloka) {
        textHtml += `<p class="teaching-line shloka-line" style="text-align: center; font-weight: 800; color: var(--accent-2); margin-bottom: clamp(12px, calc(16px * var(--smart-scale)), 22px); display: block; width: 100%;">${processedLine}</p>`;
      } else {
        textHtml += `<p class="teaching-line">${processedLine}</p>`;
      }
    });
  } else if (typeof slide.content === "string") {
    textHtml += wrapVocabularyWords(slide.content);
  }

  // Combine into split view if image exists
  if (slide.image) {
    let imagesHtml = "";
    let imgCount = 1;

    // Helper to generate labels for a specific image index
    const getLabelsHtml = (imgIdx) => {
      if (!slide.labels || !Array.isArray(slide.labels)) return "";
      return slide.labels
        .filter(lbl => lbl.imgIndex === imgIdx)
        .map(lbl => `<span class="image-label" style="left: ${lbl.x}%; top: ${lbl.y}%;">${lbl.text}</span>`)
        .join("");
    };

    if (Array.isArray(slide.image)) {
      imgCount = slide.image.length;
      imagesHtml = slide.image.map((src, idx) => {
        const labelsHtml = getLabelsHtml(idx);
        return `
          <div class="image-wrapper">
            <img src="${src}" alt="${slide.title || 'Slide Visual'}">
            ${labelsHtml}
          </div>
        `;
      }).join("");
    } else {
      const labelsHtml = getLabelsHtml(0);
      imagesHtml = `
        <div class="image-wrapper">
          <img src="${slide.image}" alt="${slide.title || 'Slide Visual'}">
          ${labelsHtml}
        </div>
      `;
    }

    html = `
      <div class="split-board-container">
        <div class="board-text-side">
          ${textHtml}
        </div>
        <div class="board-image-side" style="--image-count: ${imgCount};">
          ${imagesHtml}
        </div>
      </div>
    `;
  } else {
    html = textHtml;
  }
  
  els.content.innerHTML = html;
  
  const newContent = els.content.cloneNode(true);
  els.content.parentNode.replaceChild(newContent, els.content);
  els.content = newContent;
}

function wrapVocabularyWords(line) {
  // If line contains brackets (like intro rules) or is HTML tags, don't parse it
  if (line.startsWith("[") && line.endsWith("]")) {
    return line;
  }
  
  // Split words by whitespace, keeping track of punctuation
  const words = line.split(/(\s+)/);
  return words.map(part => {
    // If it's whitespace, return as is
    if (/^\s+$/.test(part)) return part;
    
    // Extract core word and punctuation
    const match = part.match(/^([।॥\s,.;!?()\-“”]*)(.*?)([।॥\s,.;!?()\-“”]*)$/);
    if (!match) return part;
    
    const prefix = match[1];
    const coreWord = match[2];
    const suffix = match[3];
    
    if (!coreWord) return part;
    
    // Check in dictionary
    if (vocabDictionary[coreWord]) {
      return `${prefix}<span class="vocab-word" data-vocab="${vocabDictionary[coreWord]}">${coreWord}</span>${suffix}`;
    }
    
    // Fallback substring checks for slightly inflected words
    const foundKey = Object.keys(vocabDictionary).find(key => coreWord.includes(key) && key.length > 3);
    if (foundKey) {
      const parts = coreWord.split(foundKey);
      return `${prefix}${parts[0]}<span class="vocab-word" data-vocab="${vocabDictionary[foundKey]}">${foundKey}</span>${parts[1]}${suffix}`;
    }
    
    return part;
  }).join("");
}

function openPanel(type) {
  state.panel = type;
  renderPanel(type);
  els.panel.dataset.activePanel = type;
  els.panel.classList.add("open");
  els.panel.setAttribute("aria-hidden", "false");
  els.railButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.panel === type);
  });
}

function closePanel() {
  state.panel = null;
  delete els.panel.dataset.activePanel;
  els.panel.classList.remove("open");
  els.panel.setAttribute("aria-hidden", "true");
  els.railButtons.forEach((button) => button.classList.remove("active"));
}

function renderPanel(type) {
  const slide = currentSlide();
  const labels = {
    index: "Index",
    summary: "Summary",
    mcqs: "Quiz",
    subjectives: "Subjective",
    themes: "Theme Switcher",
    edit: "Edit Slide Text",
    stickers: "Emoji Stickers"
  };

  els.panelEyebrow.textContent = (type === "themes") ? "Configuration" : `Slide ${slide.id || (state.index + 1)}`;
  els.panelTitle.textContent = labels[type] || "Panel";
  els.panelBody.innerHTML = "";

  if (type === "index") {
    renderIndexPanel();
    return;
  }

  if (type === "summary") {
    const box = document.createElement("div");
    box.className = "summary-text";
    box.innerHTML = slide.summary || "सारांश उपलब्ध नहीं है।";
    els.panelBody.appendChild(box);
    return;
  }

  if (type === "mcqs") {
    renderMcqs(slide);
    return;
  }

  if (type === "subjectives") {
    renderSubjectives(slide);
    return;
  }

  if (type === "themes") {
    renderThemes();
    return;
  }

  if (type === "stickers") {
    renderStickerPanel();
    return;
  }

  renderEditor(slide);
}

function renderIndexPanel() {
  let drawerHtml = `
    <div class="drawer-list" style="display: flex; flex-direction: column; gap: 8px; max-height: 100%; overflow-y: auto; padding-right: 4px;">
  `;
  
  state.slides.forEach((slide, idx) => {
    const isCurrent = state.index === idx;
    
    // Format a friendly display name for the slide
    let displayName = slide.title || `स्लाइड ${idx + 1}`;
    
    // Clean up title prefix for cleaner list
    displayName = displayName.replace("प्रथमः पाठः - मङ्गलम् - ", "");
    displayName = displayName.replace("प्रथमः पाठः - मङ्गलम्", "मंगलम् (मुख्य पृष्ठ)");
    
    let icon = "📄";
    if (slide.isCover) icon = "🏠";
    else if (slide.title && slide.title.includes("मन्त्र")) icon = "🕉️";
    else if (slide.title && (slide.title.includes("परिचय") || slide.title.includes("भूमिका"))) icon = "📖";
    else if (slide.title && slide.title.includes("शब्दार्थ")) icon = "✍️";

    drawerHtml += `
      <button class="drawer-item${isCurrent ? " active-glow" : ""}" style="display: flex; align-items: center; justify-content: space-between; padding: 11px 16px; border: 1px solid ${isCurrent ? "var(--accent-2)" : "rgba(255,255,255,0.05)"}; border-radius: 8px; background: ${isCurrent ? "rgba(var(--accent-rgb), 0.15)" : "rgba(0,0,0,0.18)"}; color: #fff; cursor: pointer; text-align: left; transition: all 0.2s;" onclick="goToSlide(${idx}); if(window.innerWidth < 768) closePanel();">
        <span style="font-weight:700; font-size:14px; display:flex; align-items:center; gap:8px;">
          <span>${icon}</span>
          <span>${idx + 1}. ${displayName}</span>
        </span>
      </button>
    `;
  });
  
  drawerHtml += `</div>`;
  els.panelBody.innerHTML = drawerHtml;
}

function renderMcqs(slide) {
  if (!slide.mcqs || !slide.mcqs.length) {
    els.panelBody.innerHTML = "<div class=\"summary-text\">इस slide से कोई सार्थक MCQ आवश्यक नहीं है।</div>";
    return;
  }

  slide.mcqs.forEach((mcq, index) => {
    const card = document.createElement("article");
    card.className = "mcq-card";
    card.dataset.mcqIndex = index;
    card.id = `mcq-card-${index}`;

    const question = document.createElement("h3");
    question.textContent = `${index + 1}. ${mcq.question || mcq.q}`;
    card.appendChild(question);

    const correctIdx = mcq.correctIndex !== undefined ? mcq.correctIndex : mcq.ans;
    const correctAnswer = mcq.options[correctIdx];

    // Read saved status for this specific MCQ
    const qItem = state.flatMCQs.find(q => q.slideIndex === state.index && q.mcqIndex === index);
    const savedStatus = qItem ? qItem.status : null;

    mcq.options.forEach((option) => {
      const button = document.createElement("button");
      button.className = "option-button";
      button.textContent = option;
      
      if (savedStatus && savedStatus !== "unanswered") {
        button.disabled = true;
        if (option === correctAnswer) button.classList.add("correct");
        if (savedStatus === "wrong" && option === mcq.options[mcq.selectedAns]) {
          button.classList.add("incorrect");
        }
      } else {
        button.addEventListener("click", () => selectOption(card, button, option, correctAnswer, mcq.explanation || mcq.exp));
      }
      
      card.appendChild(button);
    });

    if (savedStatus && savedStatus !== "unanswered" && (mcq.explanation || mcq.exp)) {
      const chip = document.createElement("div");
      chip.className = "answer-chip";
      chip.style.display = "flex";
      chip.style.flexDirection = "column";
      chip.style.alignItems = "flex-start";
      chip.style.gap = "8px";
      
      const correctText = document.createElement("span");
      correctText.textContent = `सही उत्तर: ${correctAnswer}`;
      chip.appendChild(correctText);
      
      const expText = document.createElement("span");
      expText.style.color = "var(--ink)";
      expText.style.fontSize = "15px";
      expText.style.fontWeight = "normal";
      expText.textContent = `व्याख्या: ${mcq.explanation}`;
      chip.appendChild(expText);
      card.appendChild(chip);
    }

    els.panelBody.appendChild(card);
  });
}

function selectOption(card, selectedButton, selected, answer, explanation) {
  const mcqCardIndex = parseInt(card.dataset.mcqIndex, 10);
  const slide = currentSlide();
  
  // Store user selection inside the slide object to restore on reload
  const correctIdx = slide.mcqs[mcqCardIndex].correctIndex !== undefined ? slide.mcqs[mcqCardIndex].correctIndex : slide.mcqs[mcqCardIndex].ans;
  const selIdx = slide.mcqs[mcqCardIndex].options.indexOf(selected);
  slide.mcqs[mcqCardIndex].selectedAns = selIdx;

  card.querySelectorAll(".option-button").forEach((button) => {
    button.disabled = true;
    if (button.textContent === answer) button.classList.add("correct");
  });

  const isCorrect = selected === answer;
  if (!isCorrect) selectedButton.classList.add("incorrect");

  const qItem = state.flatMCQs.find(q => q.slideIndex === state.index && q.mcqIndex === mcqCardIndex);
  if (qItem) {
    qItem.status = isCorrect ? "correct" : "wrong";
    saveQuestionStates();
  }

  const chip = document.createElement("div");
  chip.className = "answer-chip";
  chip.style.display = "flex";
  chip.style.flexDirection = "column";
  chip.style.alignItems = "flex-start";
  chip.style.gap = "8px";
  
  const correctText = document.createElement("span");
  correctText.textContent = `सही उत्तर: ${answer}`;
  chip.appendChild(correctText);
  
  const expTextVal = explanation || (slide.mcqs && slide.mcqs[mcqCardIndex] && (slide.mcqs[mcqCardIndex].explanation || slide.mcqs[mcqCardIndex].exp));
  if (expTextVal) {
    const expText = document.createElement("span");
    expText.style.color = "var(--ink)";
    expText.style.fontSize = "15px";
    expText.style.fontWeight = "normal";
    expText.style.lineHeight = "1.5";
    expText.style.marginTop = "4px";
    expText.textContent = `व्याख्या: ${expTextVal}`;
    chip.appendChild(expText);
  }
  
  card.appendChild(chip);
}

function renderSubjectives(slide) {
  if (!slide.subjective || slide.subjective.length === 0) {
    els.panelBody.innerHTML = "<div class=\"summary-text\">प्रश्न उपलब्ध नहीं हैं।</div>";
    return;
  }

  const list = document.createElement("div");
  list.className = "subjective-list";
  
  slide.subjective.forEach((q, idx) => {
    const item = document.createElement("div");
    const questionText = q.question || q.q;
    const answerText = q.answer || q.a;
    item.innerHTML = `<strong>प्रश्न ${idx + 1}: ${questionText}</strong><br><span style="color: var(--muted); margin-top:12px; display:block;"><strong>उत्तर:</strong> ${answerText}</span>`;
    list.appendChild(item);
  });
  
  els.panelBody.appendChild(list);
}

function highlightMCQ(mcqIndex) {
  openPanel("mcqs");
  setTimeout(() => {
    const cards = els.panelBody.querySelectorAll(".mcq-card");
    const targetCard = cards[mcqIndex];
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
      targetCard.classList.add("highlight-glow");
      setTimeout(() => targetCard.classList.remove("highlight-glow"), 2000);
    }
  }, 120);
}
window.highlightMCQ = highlightMCQ; // Make it globally accessible

// Click handler for vocabulary words and image zooming
document.addEventListener("click", (e) => {
  const vocabEl = e.target.closest(".vocab-word");
  if (vocabEl) {
    showVocabToast(vocabEl.textContent, vocabEl.dataset.vocab);
    return;
  }

  const clickedWrapper = e.target.closest(".image-wrapper");
  const zoomedWrappers = document.querySelectorAll(".image-wrapper.zoomed");
  
  if (clickedWrapper) {
    e.stopPropagation();
    if (clickedWrapper.classList.contains("zoomed")) {
      clickedWrapper.classList.remove("zoomed");
    } else {
      zoomedWrappers.forEach(w => w.classList.remove("zoomed"));
      clickedWrapper.classList.add("zoomed");
    }
  } else {
    zoomedWrappers.forEach(w => w.classList.remove("zoomed"));
  }
});

function showVocabToast(word, definition) {
  let toast = document.getElementById("vocabToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "vocabToast";
    toast.style.position = "absolute";
    toast.style.bottom = "24px";
    toast.style.right = "24px";
    toast.style.zIndex = "1000";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "8px";
    toast.style.background = "var(--container-2)";
    toast.style.border = "1px solid var(--accent-2)";
    toast.style.boxShadow = "0 8px 32px rgba(0,0,0,0.6)";
    toast.style.transition = "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)";
    toast.style.transform = "translateY(100px)";
    toast.style.opacity = "0";
    document.querySelector(".board-card").appendChild(toast);
  }
  
  toast.innerHTML = `<span style="font-weight:800; color:#fff;">${word}</span>: <span style="color:var(--accent-2); font-weight:700;">${definition}</span>`;
  toast.style.transform = "translateY(0)";
  toast.style.opacity = "1";
  
  clearTimeout(window.vocabToastTimer);
  window.vocabToastTimer = setTimeout(() => {
    toast.style.transform = "translateY(100px)";
    toast.style.opacity = "0";
  }, 3500);
}

function renderEditor(slide) {
  const wrapper = document.createElement("div");
  wrapper.className = "edit-box";

  const textarea = document.createElement("textarea");
  textarea.className = "edit-area";
  textarea.value = Array.isArray(slide.content) ? slide.content.join("\n") : (slide.content || "");
  textarea.setAttribute("aria-label", "Edit current slide text");

  const actions = document.createElement("div");
  actions.className = "edit-actions";

  const status = document.createElement("span");
  status.className = "save-status";
  status.textContent = "Live edit ready";

  const saveButton = document.createElement("button");
  saveButton.className = "save-button";
  saveButton.textContent = "Save";

  const getEditedContent = () => {
    if (Array.isArray(slide.content)) {
      return textarea.value.split("\n").map(l => l.trim()).filter(Boolean);
    }
    return textarea.value;
  };

  const save = () => {
    slide.content = getEditedContent();
    persistSlideContent(slide);
    renderSlideContentOnly(slide);
    status.textContent = "Saved";
  };

  textarea.addEventListener("input", () => {
    clearTimeout(state.saveTimer);
    slide.content = getEditedContent();
    renderSlideContentOnly(slide);
    status.textContent = "Editing...";
    state.saveTimer = setTimeout(save, 500);
  });

  saveButton.addEventListener("click", save);
  actions.append(status, saveButton);
  wrapper.append(textarea, actions);
  els.panelBody.appendChild(wrapper);
  textarea.focus();
}

function renderThemes() {
  const list = document.createElement("div");
  list.className = "theme-list";

  themes.forEach((theme) => {
    const button = document.createElement("button");
    button.className = `theme-option${document.body.dataset.theme === theme.id ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `<span class="theme-name">${theme.name}</span><span class="theme-swatch ${theme.id}"></span>`;
    button.addEventListener("click", () => setTheme(theme.id));
    list.appendChild(button);
  });

  els.panelBody.appendChild(list);
}

function setTheme(themeId) {
  state.theme = themeId;
  document.body.dataset.theme = themeId;
  localStorage.setItem(THEME_KEY, themeId);
  if (state.panel === "themes") renderPanel("themes");
}

function goToSlide(targetIndex) {
  if (targetIndex < 0 || targetIndex >= state.slides.length) return;
  state.index = targetIndex;
  renderSlide();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function updateSmartScale() {
  const width = window.innerWidth || 1280;
  const height = window.innerHeight || 720;
  const diagonalFactor = Math.sqrt((width * height) / (1920 * 1080));
  const widthFactor = width / 1920;
  const heightFactor = height / 1080;
  const rawScale = (diagonalFactor * 0.5) + (Math.min(widthFactor, heightFactor) * 0.5);
  const smartScale = Math.min(1.18, Math.max(0.82, rawScale));
  document.documentElement.style.setProperty("--smart-scale", smartScale.toFixed(3));
  document.documentElement.dataset.viewport = `${width}x${height}`;
}

els.prev.addEventListener("click", () => goToSlide(state.index - 1));
els.next.addEventListener("click", () => goToSlide(state.index + 1));
els.fullscreen.addEventListener("click", toggleFullscreen);
els.closePanel.addEventListener("click", closePanel);

els.railButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (state.panel === button.dataset.panel) closePanel();
    else openPanel(button.dataset.panel);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("textarea")) return;
  if (event.key === "ArrowRight") goToSlide(state.index + 1);
  if (event.key === "ArrowLeft") goToSlide(state.index - 1);
  if (event.key === "Escape" && state.panel) closePanel();
  if (event.key.toLowerCase() === "f") toggleFullscreen();
});

window.addEventListener("resize", updateSmartScale);
window.addEventListener("orientationchange", () => {
  setTimeout(updateSmartScale, 120);
});

document.addEventListener("fullscreenchange", () => {
  setTimeout(updateSmartScale, 120);
});


// Retro pop synth sound using Web Audio API
function playPopSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(450, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.08);
    
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {}
}

// Particle sparkles burst effect
function spawnSparkles(xPct, yPct) {
  const card = document.querySelector(".board-card");
  if (!card) return;
  
  const particlesCount = 8;
  const emojis = ["✨", "⭐", "🌟"];
  
  for (let i = 0; i < particlesCount; i++) {
    const p = document.createElement("div");
    p.className = "sparkle-particle";
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 30 + Math.random() * 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    p.style.cssText = `
      position: absolute;
      left: ${xPct}%;
      top: ${yPct}%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 99;
      font-size: ${12 + Math.random() * 10}px;
      transition: all 0.6s cubic-bezier(0.1, 0.8, 0.3, 1);
      opacity: 1;
    `;
    
    card.appendChild(p);
    
    requestAnimationFrame(() => {
      p.style.left = `calc(${xPct}% + ${tx}px)`;
      p.style.top = `calc(${yPct}% + ${ty}px)`;
      p.style.opacity = "0";
      p.style.transform = "translate(-50%, -50%) scale(0.2) rotate(" + Math.random() * 360 + "deg)";
    });
    
    setTimeout(() => p.remove(), 600);
  }
}

// Save Slide Layout as template
function saveCurrentLayout() {
  const list = currentStickerList();
  if (!list || list.length === 0) {
    alert("इस slide पर कोई sticker नहीं है!");
    return;
  }
  
  const name = prompt("नया Template नाम दर्ज करें:", "My Layout " + (document.querySelectorAll(".sticker-template-card").length + 1));
  if (!name) return;
  
  const cleanStickers = list.map(s => ({
    emoji: s.emoji,
    x: s.x,
    y: s.y,
    size: s.size,
    animation: s.animation || "none",
    tint: s.tint || null,
    gradient: s.gradient || null,
    rotation: s.rotation || 0,
    opacity: s.opacity || 1
  }));
  
  const customTemplates = JSON.parse(localStorage.getItem("alaskatha_custom_templates") || "[]");
  const newTpl = {
    id: "custom_" + Date.now(),
    label: name,
    stickers: cleanStickers,
    isCustom: true
  };
  customTemplates.push(newTpl);
  localStorage.setItem("alaskatha_custom_templates", JSON.stringify(customTemplates));
  
  renderStickerPanel();
  playPopSound();
}

// Delete custom template
function deleteCustomTemplate(id) {
  const customTemplates = JSON.parse(localStorage.getItem("alaskatha_custom_templates") || "[]");
  const updated = customTemplates.filter(t => t.id !== id);
  localStorage.setItem("alaskatha_custom_templates", JSON.stringify(updated));
  renderStickerPanel();
}

function loadStickers() {
  try { state.stickers = JSON.parse(localStorage.getItem(STICKER_KEY) || "{}"); }
  catch { state.stickers = {}; }
}

function saveStickers() {
  localStorage.setItem(STICKER_KEY, JSON.stringify(state.stickers));
}


function currentStickerList() {
  const id = String(currentSlide().id);
  if (!state.stickers[id]) state.stickers[id] = [];
  return state.stickers[id];
}

function placeSticker(emoji, opts = {}) {
  const list = currentStickerList();
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
  const x = opts.x ?? 50;
  const y = opts.y ?? 50;
  
  list.push({
    id,
    emoji,
    x,
    y,
    size: opts.size ?? 48,
    animation: opts.animation ?? "none",
    tint: opts.tint ?? null,
    groupId: opts.groupId ?? null,
    gradient: opts.gradient ?? null,
    rotation: opts.rotation ?? 0,
    opacity: opts.opacity ?? 1
  });
  saveStickers();
  state.selectedStickerId = null;
  renderStickersOnSlide();
  
  playPopSound();
  spawnSparkles(x, y);
}

function deleteSticker(id) {
  const slideId = String(currentSlide().id);
  const list = state.stickers[slideId] || [];
  const target = list.find(s => s.id === id);
  if (target && target.groupId) {
    state.stickers[slideId] = list.filter(s => s.groupId !== target.groupId);
  } else {
    state.stickers[slideId] = list.filter(s => s.id !== id);
  }
  saveStickers();
  state.selectedStickerId = null;
  renderStickersOnSlide();
}

function duplicateSticker(id) {
  const list = currentStickerList();
  const s = list.find(s => s.id === id);
  if (!s) return;

  const newGroupId = s.groupId ? "g_" + Date.now().toString(36) + Math.random().toString(36).slice(2) : null;
  let firstNewStickerId = null;

  if (s.groupId) {
    // Duplicate group
    const group = list.filter(item => item.groupId === s.groupId);
    group.forEach(item => {
      const newId = Date.now().toString(36) + Math.random().toString(36).slice(2);
      if (!firstNewStickerId) firstNewStickerId = newId;
      const newX = Math.max(2, Math.min(98, item.x + 5));
      const newY = Math.max(2, Math.min(98, item.y + 5));
      list.push({
        id: newId,
        emoji: item.emoji,
        x: newX,
        y: newY,
        size: item.size,
        animation: item.animation || "none",
        tint: item.tint || null,
        groupId: newGroupId,
        gradient: item.gradient || null,
        rotation: item.rotation || 0,
        opacity: item.opacity || 1
      });
      spawnSparkles(newX, newY);
    });
  } else {
    // Duplicate single sticker
    const newId = Date.now().toString(36) + Math.random().toString(36).slice(2);
    firstNewStickerId = newId;
    const newX = Math.max(2, Math.min(98, s.x + 5));
    const newY = Math.max(2, Math.min(98, s.y + 5));
    list.push({
      id: newId,
      emoji: s.emoji,
      x: newX,
      y: newY,
      size: s.size,
      animation: s.animation || "none",
      tint: s.tint || null,
      groupId: null,
      gradient: s.gradient || null,
      rotation: s.rotation || 0,
      opacity: s.opacity || 1
    });
    spawnSparkles(newX, newY);
  }

  saveStickers();
  state.selectedStickerId = firstNewStickerId;
  renderStickersOnSlide();
  playPopSound();
}

function clearAllStickers() {
  const slideId = String(currentSlide().id);
  state.stickers[slideId] = [];
  saveStickers();
  state.selectedStickerId = null;
  renderStickersOnSlide();
}

function resizeSticker(id, delta) {
  const list = currentStickerList();
  const s = list.find(s => s.id === id);
  if (!s) return;
  if (s.groupId) {
    const group = list.filter(item => item.groupId === s.groupId);
    const card = document.querySelector(".board-card");
    if (card && group.length > 0) {
      const rect = card.getBoundingClientRect();
      const bbox = getGroupBoundingBox(group, rect);
      const cxPct = bbox.cxPct;
      const cyPct = bbox.cyPct;

      const oldSize = s.size;
      const newSize = Math.max(24, Math.min(200, oldSize + delta));
      if (oldSize > 0) {
        const scaleRatio = newSize / oldSize;
        group.forEach(item => {
          item.size = Math.max(24, Math.min(200, Math.round(item.size * scaleRatio)));
          item.x = Math.max(2, Math.min(98, cxPct + (item.x - cxPct) * scaleRatio));
          item.y = Math.max(2, Math.min(98, cyPct + (item.y - cyPct) * scaleRatio));
        });
      }
    }
  } else {
    s.size = Math.max(24, Math.min(200, s.size + delta));
  }
  saveStickers();
  renderStickersOnSlide();
}

function setAnimation(id, anim) {
  const list = currentStickerList();
  const s = list.find(s => s.id === id);
  if (!s) return;
  if (s.groupId) {
    list.forEach(item => {
      if (item.groupId === s.groupId) item.animation = anim;
    });
  } else {
    s.animation = anim;
  }
  saveStickers();
  renderStickersOnSlide();
}

function setTint(id, tintId) {
  const list = currentStickerList();
  const s = list.find(s => s.id === id);
  if (!s) return;
  const t = TINT_COLORS.find(c => c.id === tintId);
  const tintVal = t ? t.id : null;
  const finalTint = tintVal === "none" ? null : tintVal;
  if (s.groupId) {
    list.forEach(item => {
      if (item.groupId === s.groupId) item.tint = finalTint;
    });
  } else {
    s.tint = finalTint;
  }
  saveStickers();
  renderStickersOnSlide();
}

function setOpacity(id, opacity) {
  const list = currentStickerList();
  const s = list.find(s => s.id === id);
  if (!s) return;
  if (s.groupId) {
    list.forEach(item => {
      if (item.groupId === s.groupId) {
        item.opacity = opacity;
        const el = document.querySelector(`[data-sticker-id="${item.id}"]`);
        if (el) el.style.opacity = opacity;
      }
    });
  } else {
    s.opacity = opacity;
    const el = document.querySelector(`[data-sticker-id="${id}"]`);
    if (el) el.style.opacity = opacity;
  }
  saveStickers();
}

function placeTemplate(tplId) {
  const customTemplates = JSON.parse(localStorage.getItem("alaskatha_custom_templates") || "[]");
  const allTemplates = [...STICKER_TEMPLATES, ...customTemplates];
  const tpl = allTemplates.find(t => t.id === tplId);
  if (!tpl) return;
  const groupId = "g_" + Date.now().toString(36) + Math.random().toString(36).slice(2);
  let firstStickerId = null;
  tpl.stickers.forEach(s => {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    if (!firstStickerId) firstStickerId = id;
    currentStickerList().push({
      id,
      emoji: s.emoji,
      x: s.x,
      y: s.y,
      size: s.size,
      animation: s.animation || "none",
      tint: s.tint || null,
      groupId: groupId,
      gradient: s.gradient || null,
      rotation: s.rotation || 0,
      opacity: s.opacity ?? 1
    });
  });
  saveStickers();
  state.selectedStickerId = firstStickerId;
  renderStickersOnSlide();
}

/* ── Get selected stickers list (single or group) ── */
function getSelectedStickers() {
  if (!state.selectedStickerId) return [];
  const list = currentStickerList();
  const activeStk = list.find(s => s.id === state.selectedStickerId);
  if (!activeStk) return [];
  if (activeStk.groupId) {
    return list.filter(s => s.groupId === activeStk.groupId);
  }
  return [activeStk];
}

/* ── Render all stickers on current slide ── */
function renderStickersOnSlide() {
  document.querySelectorAll(".slide-sticker, .sticker-sel-box, .sticker-toolbar-float, .sticker-picker-dropdown").forEach(e => e.remove());
  const card = document.querySelector(".board-card");
  if (!card) return;

  currentStickerList().forEach(stk => {
    // Ensure new fields exist for old stickers loaded from storage
    if (!stk.animation) stk.animation = "none";
    if (!stk.tint) stk.tint = null;
    if (!stk.rotation) stk.rotation = 0;
    if (stk.opacity == null) stk.opacity = 1;

    const el = document.createElement("div");
    el.className = "slide-sticker";
    if (stk.animation && stk.animation !== "none") el.classList.add("anim-" + stk.animation);
    if (stk.tint) el.classList.add("tint-" + stk.tint);
    el.dataset.stickerId = stk.id;
    el.textContent = stk.emoji;

    const isText = stk.emoji.length > 2 || /[A-Za-z0-9]/.test(stk.emoji);
    if (isText) {
      el.classList.add("text-badge");
      el.setAttribute("data-text", stk.emoji.toUpperCase());
    }

    const displaySize = isText ? Math.round(stk.size * 0.4) : stk.size;
    el.style.cssText = `font-size:${displaySize}px; left:${stk.x}%; top:${stk.y}%; transform:translate(-50%,-50%) rotate(${stk.rotation}deg); opacity:${stk.opacity}; position:absolute; cursor:grab; z-index:50; user-select:none; line-height:1;`;
    if (stk.gradient) {
      el.style.background = stk.gradient;
    }


    // --- Pointer: drag + tap detection ---
    let pX, pY, didDrag = false;
    let groupStarts = [];
    let wasSelectedOnDown = false;

    el.addEventListener("pointerdown", e => {
      e.stopPropagation();
      el.setPointerCapture(e.pointerId);
      pX = e.clientX; pY = e.clientY;
      didDrag = false;
      el.style.cursor = "grabbing";
      document.querySelectorAll(".sticker-sel-box, .sticker-toolbar-float").forEach(x => x.remove());

      // Check if this sticker is already selected
      const isSelected = getSelectedStickers().some(s => s.id === stk.id);
      wasSelectedOnDown = isSelected;

      // Select it immediately on down to prepare group starts
      state.selectedStickerId = stk.id;

      const selectedGroup = getSelectedStickers();
      groupStarts = selectedGroup.map(item => ({ id: item.id, x: item.x, y: item.y }));
    });

    el.addEventListener("pointermove", e => {
      if (pX == null) return;
      const dx = e.clientX - pX, dy = e.clientY - pY;
      if (!didDrag && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) didDrag = true;
      if (!didDrag) return;
      const rect = card.getBoundingClientRect();
      const pctDx = (dx / rect.width) * 100;
      const pctDy = (dy / rect.height) * 100;

      const selectedGroup = getSelectedStickers();

      groupStarts.forEach(start => {
        const item = currentStickerList().find(s => s.id === start.id);
        if (item) {
          item.x = Math.max(2, Math.min(98, start.x + pctDx));
          item.y = Math.max(2, Math.min(98, start.y + pctDy));
          const itemEl = document.querySelector(`[data-sticker-id="${item.id}"]`);
          if (itemEl) {
            itemEl.style.left = item.x + "%";
            itemEl.style.top  = item.y + "%";
          }
        }
      });

      // Update the single selection box and floating toolbar position during drag
      const currentGroupState = selectedGroup.map(g => currentStickerList().find(s => s.id === g.id)).filter(Boolean);
      const newBbox = getGroupBoundingBox(currentGroupState, rect);
      const activeBox = document.querySelector(".sticker-sel-box");
      const pad = 8;
      if (activeBox) {
        activeBox.style.left = (newBbox.left - pad) + "px";
        activeBox.style.top = (newBbox.top - pad) + "px";
        activeBox.style.width = (newBbox.width + pad * 2) + "px";
        activeBox.style.height = (newBbox.height + pad * 2) + "px";
      }

      const tb = document.querySelector(".sticker-toolbar-float");
      if (tb) {
        const newBboxTopPct = (newBbox.top / rect.height) * 100;
        const newBboxBottomPct = (newBbox.bottom / rect.height) * 100;
        const newBboxCxPct = (newBbox.cx / rect.width) * 100;
        const activeStk = currentStickerList().find(s => s.id === state.selectedStickerId) || selectedGroup[0];
        const offsetX = activeStk.tbOffsetX || 0;
        const offsetY = activeStk.tbOffsetY || 0;
        
        tb.style.left = `calc(${newBboxCxPct}% + ${offsetX}px)`;
        if (newBboxTopPct < 22) {
          tb.style.top = `calc(${newBboxBottomPct}% + 10px + ${offsetY}px)`;
          tb.style.bottom = "auto";
        } else {
          tb.style.bottom = `calc(100% - ${newBboxTopPct}% + 10px - ${offsetY}px)`;
          tb.style.top = "auto";
        }
      }
    });

    el.addEventListener("pointerup", e => {
      e.stopPropagation();
      el.style.cursor = "grab";
      if (pX == null) return;
      if (didDrag) {
        saveStickers();
        renderStickersOnSlide();
      } else {
        // TAP: toggle selection based on initial state
        state.selectedStickerId = wasSelectedOnDown ? null : stk.id;
        renderStickersOnSlide();
      }
      pX = null;
    });

    card.appendChild(el);

    const isSelectedGroup = getSelectedStickers().some(s => s.id === stk.id);
    if (isSelectedGroup) {
      el.classList.add("selected");
    }
  });

  const selectedGroup = getSelectedStickers();
  if (selectedGroup.length > 0) {
    const activeStk = selectedGroup.find(s => s.id === state.selectedStickerId) || selectedGroup[0];
    _drawGroupSelBox(card, selectedGroup, activeStk);
    _drawToolbar(card, activeStk, selectedGroup);
  }
}

/* ── Selection box with corner handles ── */
function getGroupBoundingBox(stickers, rect) {
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;

  stickers.forEach(stk => {
    const cx = (stk.x / 100) * rect.width;
    const cy = (stk.y / 100) * rect.height;
    
    // Determine custom horizontal/vertical radius based on sticker type
    const isText = stk.emoji.length > 2 || /[A-Za-z0-9]/.test(stk.emoji);
    const rx = isText ? ((stk.emoji.length * 0.12) + 0.3) * stk.size : stk.size / 2;
    const ry = isText ? stk.size * 0.32 : stk.size / 2;

    if (cx - rx < minX) minX = cx - rx;
    if (cx + rx > maxX) maxX = cx + rx;
    if (cy - ry < minY) minY = cy - ry;
    if (cy + ry > maxY) maxY = cy + ry;
  });

  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;

  return {
    left: minX,
    right: maxX,
    top: minY,
    bottom: maxY,
    width: maxX - minX,
    height: maxY - minY,
    cx: cx,
    cy: cy,
    cxPct: (cx / rect.width) * 100,
    cyPct: (cy / rect.height) * 100,
    topPct: (minY / rect.height) * 100,
    bottomPct: (maxY / rect.height) * 100
  };
}

/* ── Selection box with corner handles ── */
function _drawGroupSelBox(card, group, activeStk) {
  const rect = card.getBoundingClientRect();
  const bbox = getGroupBoundingBox(group, rect);
  
  const box = document.createElement("div");
  box.className = "sticker-sel-box";
  box.dataset.boxId = activeStk.id;
  
  const pad = 8;
  const left = bbox.left - pad;
  const top = bbox.top - pad;
  const width = bbox.width + pad * 2;
  const height = bbox.height + pad * 2;

  const rot = activeStk.rotation || 0;

  box.style.cssText = `
    position:absolute;
    left:${left}px; top:${top}px;
    width:${width}px; height:${height}px;
    border:2.5px solid #ffd700; border-radius:8px;
    pointer-events:none; z-index:51;
    box-shadow: 0 0 16px rgba(255,215,0,0.35), inset 0 0 10px rgba(255,215,0,0.1);
    transform: rotate(${rot}deg);
    transform-origin: center center;
  `;

  // Draw corner resize handles
  ["tl","tr","bl","br"].forEach(c => {
    const h = document.createElement("div");
    h.style.cssText = `
      position:absolute; width:12px; height:12px;
      background:#ffd700; border-radius:50%; border:2px solid #a88600;
      pointer-events:auto; z-index:52;
      box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    `;
    if (c === "tl") { h.style.top = "-6px"; h.style.left = "-6px"; h.style.cursor = "nwse-resize"; }
    if (c === "tr") { h.style.top = "-6px"; h.style.right = "-6px"; h.style.cursor = "nesw-resize"; }
    if (c === "bl") { h.style.bottom = "-6px"; h.style.left = "-6px"; h.style.cursor = "nesw-resize"; }
    if (c === "br") { h.style.bottom = "-6px"; h.style.right = "-6px"; h.style.cursor = "nwse-resize"; }
    
    _makeGroupResizable(h, group, bbox, card);
    box.appendChild(h);
  });

  // Rotation Handle Line
  const line = document.createElement("div");
  line.className = "rotation-handle-line";

  // Rotation Handle Dot
  const handleDot = document.createElement("div");
  handleDot.className = "rotation-handle-dot";

  _makeGroupRotatable(handleDot, group, bbox, card);
  box.append(line, handleDot);

  card.appendChild(box);
}

function _makeGroupRotatable(handle, group, bbox, card) {
  handle.addEventListener("pointerdown", e => {
    e.stopPropagation();
    e.preventDefault();
    handle.setPointerCapture(e.pointerId);

    const dd = card.querySelector(".sticker-picker-dropdown");
    if (dd) dd.remove();

    const rect = card.getBoundingClientRect();
    const cx = rect.left + bbox.cx;
    const cy = rect.top + bbox.cy;

    const onM = ev => {
      const angleRad = Math.atan2(ev.clientY - cy, ev.clientX - cx);
      let deg = angleRad * (180 / Math.PI) + 90;
      deg = (deg % 360 + 360) % 360;
      const roundedDeg = Math.round(deg);
      
      group.forEach(item => {
        const sticker = currentStickerList().find(s => s.id === item.id);
        if (sticker) {
          sticker.rotation = roundedDeg;
          const el = document.querySelector(`[data-sticker-id="${sticker.id}"]`);
          if (el) {
            el.style.transform = `translate(-50%, -50%) rotate(${roundedDeg}deg)`;
          }
        }
      });

      const activeBox = document.querySelector(".sticker-sel-box");
      if (activeBox) {
        activeBox.style.transform = `rotate(${roundedDeg}deg)`;
      }
    };

    const onU = () => {
      window.removeEventListener("pointermove", onM);
      window.removeEventListener("pointerup", onU);
      saveStickers();
    };

    window.addEventListener("pointermove", onM);
    window.addEventListener("pointerup", onU);
  });
}


/* ── Drag-to-Resize via corner handle ── */
function _makeGroupResizable(handle, group, bbox, card) {
  let startDist;
  handle.addEventListener("pointerdown", e => {
    e.stopPropagation();
    e.preventDefault();
    handle.setPointerCapture(e.pointerId);

    // Close any open picker dropdown when starting a resize
    const dd = card.querySelector(".sticker-picker-dropdown");
    if (dd) dd.remove();

    const rect = card.getBoundingClientRect();
    const cx = rect.left + bbox.cx;
    const cy = rect.top + bbox.cy;
    startDist = Math.hypot(e.clientX - cx, e.clientY - cy);

    const groupStarts = group.map(item => ({
      id: item.id,
      size: item.size,
      x: item.x,
      y: item.y
    }));

    const cxPct = (bbox.cx / rect.width) * 100;
    const cyPct = (bbox.cy / rect.height) * 100;

    const onM = ev => {
      const d = Math.hypot(ev.clientX - cx, ev.clientY - cy);
      if (startDist < 5) return;
      const scale = d / startDist;

      groupStarts.forEach(start => {
        const item = currentStickerList().find(s => s.id === start.id);
        if (item) {
          const ns = Math.max(24, Math.min(200, Math.round(start.size * scale)));
          item.size = ns;
          item.x = Math.max(2, Math.min(98, cxPct + (start.x - cxPct) * scale));
          item.y = Math.max(2, Math.min(98, cyPct + (start.y - cyPct) * scale));

          const itemEl = document.querySelector(`[data-sticker-id="${item.id}"]`);
          if (itemEl) {
            itemEl.style.fontSize = ns + "px";
            itemEl.style.left = item.x + "%";
            itemEl.style.top = item.y + "%";
          }
        }
      });

      // Update selector box and toolbar positions in real-time
      const currentGroupState = group.map(g => currentStickerList().find(s => s.id === g.id)).filter(Boolean);
      const newBbox = getGroupBoundingBox(currentGroupState, rect);
      const activeBox = document.querySelector(".sticker-sel-box");
      const pad = 8;
      if (activeBox) {
        activeBox.style.left = (newBbox.left - pad) + "px";
        activeBox.style.top = (newBbox.top - pad) + "px";
        activeBox.style.width = (newBbox.width + pad * 2) + "px";
        activeBox.style.height = (newBbox.height + pad * 2) + "px";
      }

      const tb = document.querySelector(".sticker-toolbar-float");
      if (tb) {
        const newBboxTopPct = (newBbox.top / rect.height) * 100;
        const newBboxBottomPct = (newBbox.bottom / rect.height) * 100;
        const newBboxCxPct = (newBbox.cx / rect.width) * 100;
        const activeStk = currentStickerList().find(s => s.id === state.selectedStickerId) || group[0];
        const offsetX = activeStk.tbOffsetX || 0;
        const offsetY = activeStk.tbOffsetY || 0;
        
        tb.style.left = `calc(${newBboxCxPct}% + ${offsetX}px)`;
        if (newBboxTopPct < 22) {
          tb.style.top = `calc(${newBboxBottomPct}% + 10px + ${offsetY}px)`;
          tb.style.bottom = "auto";
        } else {
          tb.style.bottom = `calc(100% - ${newBboxTopPct}% + 10px - ${offsetY}px)`;
          tb.style.top = "auto";
        }
      }

      const activeStk = currentStickerList().find(s => s.id === state.selectedStickerId);
      if (activeStk) {
        const l = document.querySelector(".sticker-toolbar-float span");
        if (l) l.textContent = activeStk.size + "px";
      }
    };
    const onU = ev => {
      handle.releasePointerCapture(ev.pointerId);
      handle.removeEventListener("pointermove", onM);
      handle.removeEventListener("pointerup", onU);
      saveStickers();
      renderStickersOnSlide();
    };
    handle.addEventListener("pointermove", onM);
    handle.addEventListener("pointerup", onU);
  });
}

/* ── Floating toolbar above sticker group ── */
function _drawToolbar(card, stk, group) {
  const tb = document.createElement("div");
  tb.className = "sticker-toolbar-float";
  
  const rect = card.getBoundingClientRect();
  const bbox = getGroupBoundingBox(group, rect);
  const isTop = bbox.topPct < 22;

  // Initialize custom offsets if not exist
  if (stk.tbOffsetX === undefined) stk.tbOffsetX = 0;
  if (stk.tbOffsetY === undefined) stk.tbOffsetY = 0;

  tb.style.cssText = `
    position:absolute;
    left:calc(${bbox.cxPct}% + ${stk.tbOffsetX}px);
    ${isTop ? `top:calc(${bbox.bottomPct}% + 10px + ${stk.tbOffsetY}px); bottom:auto;` : `bottom:calc(100% - ${bbox.topPct}% + 10px - ${stk.tbOffsetY}px); top:auto;`}
    transform:translateX(-50%);
    display:flex; align-items:center; gap:10px;
    padding:8px 12px; border-radius:18px; z-index:60;
    background:rgba(28,28,36,0.96); backdrop-filter:blur(16px);
    border:1.5px solid rgba(255,215,0,0.25);
    box-shadow:0 8px 32px rgba(0,0,0,0.6), 0 0 16px rgba(255,215,0,0.1);
    animation: toolbarFadeIn 0.25s cubic-bezier(0.34,1.56,0.64,1);
    cursor:move;
  `;

  // Dragging support for toolbar
  let tpX, tpY, isDraggingTb = false;
  tb.addEventListener("pointerdown", e => {
    // If clicked on a button or control, do not trigger drag
    if (e.target !== tb && !e.target.classList.contains("stk-tb-label")) {
      e.stopPropagation();
      return;
    }
    e.stopPropagation();
    tb.setPointerCapture(e.pointerId);
    tpX = e.clientX;
    tpY = e.clientY;
    isDraggingTb = true;
  });

  tb.addEventListener("pointermove", e => {
    if (!isDraggingTb) return;
    e.stopPropagation();
    const dx = e.clientX - tpX;
    const dy = e.clientY - tpY;
    
    stk.tbOffsetX += dx;
    stk.tbOffsetY += dy;
    
    tpX = e.clientX;
    tpY = e.clientY;

    // Reposition the toolbar in real-time
    tb.style.left = `calc(${bbox.cxPct}% + ${stk.tbOffsetX}px)`;
    if (isTop) {
      tb.style.top = `calc(${bbox.bottomPct}% + 10px + ${stk.tbOffsetY}px)`;
      tb.style.bottom = "auto";
    } else {
      tb.style.bottom = `calc(100% - ${bbox.topPct}% + 10px - ${stk.tbOffsetY}px)`;
      tb.style.top = "auto";
    }
    
    // Also move the picker dropdown if open
    const dd = card.querySelector(".sticker-picker-dropdown");
    if (dd) {
      dd.style.left = `calc(${bbox.cxPct}% + ${stk.tbOffsetX}px)`;
      if (isTop) {
        dd.style.top = `calc(${bbox.bottomPct}% + 76px + ${stk.tbOffsetY}px)`;
        dd.style.bottom = "auto";
      } else {
        dd.style.bottom = `calc(100% - ${bbox.topPct}% + 76px - ${stk.tbOffsetY}px)`;
        dd.style.top = "auto";
      }
    }
  });

  tb.addEventListener("pointerup", e => {
    if (!isDraggingTb) return;
    e.stopPropagation();
    isDraggingTb = false;
    saveStickers();
  });

  tb.addEventListener("click", e => e.stopPropagation());

  const btnBase = `
    width:30px; height:30px; border:none; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    font-size:15px; font-weight:900; cursor:pointer;
    transition:all 0.2s cubic-bezier(0.34,1.56,0.64,1); padding:0;
  `;

  function _goldBtn(text, onClick) {
    const b = document.createElement("button");
    b.style.cssText = btnBase + "background:rgba(255,215,0,0.1); border:1px solid rgba(255,215,0,0.25); color:#ffd700;";
    b.textContent = text;
    b.onmouseenter = () => { b.style.background="rgba(255,215,0,0.25)"; b.style.borderColor="rgba(255,215,0,0.8)"; b.style.transform="scale(1.15)"; b.style.boxShadow="0 0 8px rgba(255,215,0,0.3)"; };
    b.onmouseleave = () => { b.style.background="rgba(255,215,0,0.1)"; b.style.borderColor="rgba(255,215,0,0.25)"; b.style.transform="scale(1)"; b.style.boxShadow="none"; };
    b.onclick = onClick;
    return b;
  }

  // Helper for column layout with sublabels
  function _col(controlEl, sublabelText) {
    const wrap = document.createElement("div");
    wrap.style.cssText = "display:flex; flex-direction:column; align-items:center; gap:4px;";
    wrap.appendChild(controlEl);
    const label = document.createElement("span");
    label.style.cssText = "font-size:9.5px; font-weight:700; color:rgba(255,255,255,0.85); text-transform:uppercase; letter-spacing:0.5px; text-align:center; pointer-events:none; user-select:none; margin-top:2px; font-family:sans-serif;";
    label.textContent = sublabelText;
    wrap.appendChild(label);
    return wrap;
  }

  // Shrink −
  const shrink = _goldBtn("−", () => resizeSticker(stk.id, -12));

  // Size label
  const lbl = document.createElement("span");
  lbl.className = "stk-tb-label";
  lbl.style.cssText = "color:rgba(255,255,255,0.5); font-size:10px; min-width:28px; text-align:center; font-weight:600; letter-spacing:0.5px; cursor:move; user-select:none;";
  lbl.textContent = stk.size + "px";

  // Grow +
  const grow = _goldBtn("+", () => resizeSticker(stk.id, 12));

  const sizeControlRow = document.createElement("div");
  sizeControlRow.style.cssText = "display:flex; align-items:center; gap:5px;";
  sizeControlRow.append(shrink, lbl, grow);
  const sizeCol = _col(sizeControlRow, "Size");

  // ── Separator ──
  function _sep() {
    const s = document.createElement("div");
    s.style.cssText = "width:1px; height:34px; background:rgba(255,255,255,0.12); margin:0 2px; align-self:center;";
    return s;
  }

  // ── Animation Picker (💫) ──
  const animBtn = _goldBtn("💫", () => {
    _togglePicker(card, stk, "anim", group);
  });
  if (stk.animation && stk.animation !== "none") {
    animBtn.style.background = "rgba(255,215,0,0.3)";
    animBtn.style.borderColor = "rgba(255,215,0,0.7)";
  }
  const animCol = _col(animBtn, "Anim");

  // ── Color Tint Picker (🎨) ──
  const tintBtn = document.createElement("button");
  tintBtn.style.cssText = btnBase + "border:1px solid rgba(255,215,0,0.25); cursor:pointer;";
  if (stk.tint) {
    const tc = TINT_COLORS.find(c => c.id === stk.tint);
    tintBtn.style.background = tc ? tc.hex : "rgba(255,215,0,0.1)";
    tintBtn.style.borderColor = tc ? tc.hex : "rgba(255,215,0,0.25)";
    tintBtn.textContent = "";
    const dot = document.createElement("div");
    dot.style.cssText = `width:16px; height:16px; border-radius:50%; background:${tc ? tc.hex : '#ffd700'}; box-shadow:0 0 6px ${tc ? tc.hex : '#ffd700'};`;
    tintBtn.appendChild(dot);
  } else {
    tintBtn.style.background = "rgba(255,215,0,0.1)";
    tintBtn.textContent = "🎨";
  }
  tintBtn.onmouseenter = () => { tintBtn.style.transform="scale(1.15)"; tintBtn.style.boxShadow="0 0 8px rgba(255,215,0,0.3)"; };
  tintBtn.onmouseleave = () => { tintBtn.style.transform="scale(1)"; tintBtn.style.boxShadow="none"; };
  tintBtn.onclick = () => { _togglePicker(card, stk, "tint", group); };
  const tintCol = _col(tintBtn, "Color");

  // ── Opacity Picker (🌓) ──
  const opacityBtn = _goldBtn("🌓", () => {
    _togglePicker(card, stk, "opacity", group);
  });
  if (stk.opacity != null && stk.opacity < 1) {
    opacityBtn.style.background = "rgba(255,215,0,0.3)";
    opacityBtn.style.borderColor = "rgba(255,215,0,0.7)";
  }
  const opacityCol = _col(opacityBtn, "Opacity");

  // Duplicate button 📋
  const dupBtn = document.createElement("button");
  dupBtn.style.cssText = btnBase + "background:rgba(255,215,0,0.1); border:1px solid rgba(255,215,0,0.25); color:#ffd700;";
  dupBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="pointer-events:none;display:block;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
  dupBtn.onmouseenter = () => { dupBtn.style.background="rgba(255,215,0,0.25)"; dupBtn.style.borderColor="rgba(255,215,0,0.8)"; dupBtn.style.transform="scale(1.15)"; dupBtn.style.boxShadow="0 0 8px rgba(255,215,0,0.3)"; };
  dupBtn.onmouseleave = () => { dupBtn.style.background="rgba(255,215,0,0.1)"; dupBtn.style.borderColor="rgba(255,215,0,0.25)"; dupBtn.style.transform="scale(1)"; dupBtn.style.boxShadow="none"; };
  dupBtn.onclick = () => duplicateSticker(stk.id);
  const dupCol = _col(dupBtn, "Copy");

  // Delete 🗑 (Premium SVG version)
  const del = document.createElement("button");
  del.style.cssText = btnBase + "background:rgba(239,68,68,0.12); border:1px solid rgba(239,68,68,0.25); color:#ef4444;";
  del.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="pointer-events:none;display:block;"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6"/></svg>`;
  del.onmouseenter = () => { del.style.background="rgba(239,68,68,0.28)"; del.style.borderColor="rgba(239,68,68,0.8)"; del.style.color="#ff5f70"; del.style.transform="scale(1.15)"; del.style.boxShadow="0 0 10px rgba(239,68,68,0.45)"; };
  del.onmouseleave = () => { del.style.background="rgba(239,68,68,0.12)"; del.style.borderColor="rgba(239,68,68,0.25)"; del.style.color="#ef4444"; del.style.transform="scale(1)"; del.style.boxShadow="none"; };
  del.onclick = () => deleteSticker(stk.id);
  const delCol = _col(del, "Delete");

  // Close ✕ button (Deselect)
  const closeBtn = _goldBtn("✕", () => {
    state.selectedStickerId = null;
    renderStickersOnSlide();
  });
  const closeCol = _col(closeBtn, "Close");

  tb.append(sizeCol, _sep(), animCol, tintCol, opacityCol, _sep(), dupCol, _sep(), delCol, closeCol);
  card.appendChild(tb);

}

/* ── Picker Dropdown (animation / tint) ── */
function _togglePicker(card, stk, type, group) {
  const existingPicker = card.querySelector(".sticker-picker-dropdown");
  if (existingPicker) { existingPicker.remove(); return; }

  const dd = document.createElement("div");
  dd.className = "sticker-picker-dropdown";
  
  const rect = card.getBoundingClientRect();
  const bbox = getGroupBoundingBox(group, rect);
  const isTop = bbox.topPct < 22;

  const offsetX = stk.tbOffsetX || 0;
  const offsetY = stk.tbOffsetY || 0;

  dd.style.cssText = `
    position:absolute; left:calc(${bbox.cxPct}% + ${offsetX}px);
    ${isTop ? `top:calc(${bbox.bottomPct}% + 76px + ${offsetY}px); bottom:auto;` : `bottom:calc(100% - ${bbox.topPct}% + 76px - ${offsetY}px); top:auto;`}
    transform:translateX(-50%);
    display:flex; flex-wrap:wrap; gap:4px; padding:8px 10px;
    border-radius:14px; z-index:65;
    background:rgba(20,20,30,0.97); backdrop-filter:blur(20px);
    border:1.5px solid rgba(255,215,0,0.2);
    box-shadow:0 8px 32px rgba(0,0,0,0.7);
    animation: toolbarFadeIn 0.2s ease;
    max-width:240px;
  `;
  dd.addEventListener("pointerdown", e => e.stopPropagation());
  dd.addEventListener("click", e => e.stopPropagation());

  if (type === "anim") {
    ANIM_OPTIONS.forEach(opt => {
      const b = document.createElement("button");
      const isActive = (stk.animation || "none") === opt.id;
      b.className = "picker-option" + (isActive ? " active" : "");
      b.textContent = opt.label;
      b.style.cssText = `
        padding:5px 10px; border-radius:8px; border:1px solid ${isActive ? '#ffd700' : 'rgba(255,255,255,0.1)'};
        background:${isActive ? 'rgba(255,215,0,0.2)' : 'rgba(255,255,255,0.05)'};
        color:${isActive ? '#ffd700' : '#ccc'}; font-size:12px; font-weight:600;
        cursor:pointer; transition:all 0.15s;
      `;
      b.onmouseenter = () => { if (!isActive) { b.style.borderColor='rgba(255,215,0,0.5)'; b.style.background='rgba(255,215,0,0.1)'; } };
      b.onmouseleave = () => { if (!isActive) { b.style.borderColor='rgba(255,255,255,0.1)'; b.style.background='rgba(255,255,255,0.05)'; } };
      b.onclick = () => { setAnimation(stk.id, opt.id); };
      dd.appendChild(b);
    });
  } else if (type === "tint") {
    TINT_COLORS.forEach(tc => {
      const b = document.createElement("button");
      const isActive = (stk.tint || "none") === tc.id;
      b.style.cssText = `
        width:28px; height:28px; border-radius:50%; border:2px solid ${isActive ? '#ffd700' : 'rgba(255,255,255,0.15)'};
        background:${tc.hex || 'rgba(60,60,60,0.5)'}; cursor:pointer;
        transition:all 0.15s; display:flex; align-items:center; justify-content:center;
        ${isActive ? 'box-shadow:0 0 8px ' + (tc.hex || '#ffd700') + ';' : ''}
      `;
      if (!tc.hex) b.textContent = "✕";
      b.style.color = "#fff"; b.style.fontSize = "12px"; b.style.fontWeight = "900";
      b.onmouseenter = () => { b.style.transform = "scale(1.2)"; b.style.boxShadow = `0 0 10px ${tc.hex || 'rgba(255,255,255,0.3)'}` };
      b.onmouseleave = () => { b.style.transform = "scale(1)"; if (!isActive) b.style.boxShadow = 'none'; };
      b.onclick = () => { setTint(stk.id, tc.id); };
      dd.appendChild(b);
    });
  } else if (type === "opacity") {
    const sliderContainer = document.createElement("div");
    sliderContainer.style.cssText = "display:flex; flex-direction:column; align-items:center; gap:8px; width:100%; padding:4px;";
    
    const sliderLabel = document.createElement("div");
    sliderLabel.style.cssText = "font-size:11px; font-weight:700; color:#ffd700; text-transform:uppercase; letter-spacing:0.5px;";
    sliderLabel.textContent = `Opacity: ${Math.round((stk.opacity ?? 1) * 100)}%`;
    
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "20";
    slider.max = "100";
    slider.value = Math.round((stk.opacity ?? 1) * 100).toString();
    slider.style.cssText = "width:150px; cursor:pointer; accent-color:#ffd700;";
    
    slider.oninput = (e) => {
      const val = parseInt(e.target.value);
      sliderLabel.textContent = `Opacity: ${val}%`;
      setOpacity(stk.id, val / 100);
    };
    
    sliderContainer.append(sliderLabel, slider);
    dd.appendChild(sliderContainer);
  }


  // Close / Dismiss picker button (✕)
  const closeDDBtn = document.createElement("button");
  closeDDBtn.style.cssText = `
    position:absolute; right:-5px; top:-5px;
    width:18px; height:18px; border-radius:50%;
    border:1px solid rgba(255,215,0,0.4); background:#141B2D; color:#ffd700;
    display:flex; align-items:center; justify-content:center;
    font-size:10px; font-weight:900; cursor:pointer;
    box-shadow:0 2px 6px rgba(0,0,0,0.5); z-index:70;
    padding:0; line-height:1; transition:all 0.15s ease;
  `;
  closeDDBtn.textContent = "✕";
  closeDDBtn.onmouseenter = () => { closeDDBtn.style.transform = "scale(1.15)"; closeDDBtn.style.borderColor = "#ffd700"; closeDDBtn.style.boxShadow = "0 0 8px rgba(255,215,0,0.5)"; };
  closeDDBtn.onmouseleave = () => { closeDDBtn.style.transform = "scale(1)"; closeDDBtn.style.borderColor = "rgba(255,215,0,0.4)"; closeDDBtn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.5)"; };
  closeDDBtn.onclick = (e) => {
    e.stopPropagation();
    dd.remove();
  };
  dd.appendChild(closeDDBtn);

  card.appendChild(dd);
}

/* ── Sticker Panel (sidebar) ── */
function renderStickerPanel() {
  els.panelEyebrow.textContent = `Slide ${currentSlide().id || state.index + 1}`;
  els.panelTitle.textContent = "Emoji Stickers";
  els.panelBody.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.className = "sticker-panel-wrap";

  // Category tabs
  const tabs = document.createElement("div");
  tabs.className = "sticker-category-tabs";
  STICKER_CATEGORIES.forEach(cat => {
    const tab = document.createElement("button");
    tab.className = "sticker-cat-tab" + (state.activeStickerCategory === cat.id ? " active" : "");
    tab.textContent = cat.label;
    tab.onclick = () => { state.activeStickerCategory = cat.id; renderStickerPanel(); };
    tabs.appendChild(tab);
  });

  // Emoji grid — dense like phone keyboard
  const grid = document.createElement("div");
  grid.className = "sticker-emoji-grid" + (state.activeStickerCategory === "smartclass" ? " class-badge-grid" : "");
  if (state.activeStickerCategory === "smartclass") {
    grid.style.cssText = "display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; padding: 8px 4px 12px 4px !important;";
  }
  const activeCat = STICKER_CATEGORIES.find(c => c.id === state.activeStickerCategory);
  (activeCat?.emojis || []).forEach(emoji => {
    const btn = document.createElement("button");
    btn.className = "sticker-emoji-btn";
    btn.textContent = emoji;
    btn.onclick = () => placeSticker(emoji);
    grid.appendChild(btn);
  });

  // ── Custom Badge Section ──
  const badgeHeader = document.createElement("div");
  badgeHeader.style.cssText = "color:rgba(255,255,255,0.45); font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; margin-top:14px; padding:0 2px;";
  badgeHeader.textContent = "Custom Badge";

  const badgeForm = document.createElement("div");
  badgeForm.className = "sticker-badge-form";

  const badgeInput = document.createElement("input");
  badgeInput.type = "text";
  badgeInput.placeholder = "जैसे: Vivan Live";
  badgeInput.className = "custom-badge-input";

  const colorRow = document.createElement("div");
  colorRow.className = "custom-badge-colors";

  const label1 = document.createElement("label");
  label1.innerHTML = `<span>Start:</span> <input type="color" id="customColor1" value="#eab308" class="custom-badge-color">`;
  const label2 = document.createElement("label");
  label2.innerHTML = `<span>End:</span> <input type="color" id="customColor2" value="#b45309" class="custom-badge-color">`;
  colorRow.append(label1, label2);

  const addBadgeBtn = document.createElement("button");
  addBadgeBtn.className = "custom-badge-submit";
  addBadgeBtn.textContent = "Add Badge";
  addBadgeBtn.onclick = () => {
    const text = badgeInput.value.trim();
    if (!text) {
      alert("कृपया text दर्ज करें!");
      return;
    }
    const c1 = document.getElementById("customColor1").value;
    const c2 = document.getElementById("customColor2").value;
    const gradient = `linear-gradient(135deg, ${c1}, ${c2})`;
    placeSticker(text, {
      gradient: gradient
    });
    badgeInput.value = "";
  };

  badgeForm.append(badgeInput, colorRow, addBadgeBtn);

  // ── Quick Templates Section ──
  const tplHeaderRow = document.createElement("div");
  tplHeaderRow.style.cssText = "display:flex; align-items:center; justify-content:space-between; margin-top:14px; padding:0 2px;";

  const tplLabel = document.createElement("span");
  tplLabel.style.cssText = "color:rgba(255,255,255,0.45); font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;";
  tplLabel.textContent = "Quick Templates";

  const saveLayoutBtn = document.createElement("button");
  saveLayoutBtn.className = "save-layout-btn";
  saveLayoutBtn.innerHTML = "💾 Save Slide Layout";
  saveLayoutBtn.onclick = saveCurrentLayout;

  tplHeaderRow.append(tplLabel, saveLayoutBtn);

  const tplGrid = document.createElement("div");
  tplGrid.className = "sticker-template-grid";
  
  const customTemplates = JSON.parse(localStorage.getItem("alaskatha_custom_templates") || "[]");
  const allTemplates = [...STICKER_TEMPLATES, ...customTemplates];
  
  allTemplates.forEach(tpl => {
    const card = document.createElement("button");
    card.className = "sticker-template-card" + (tpl.isCustom ? " is-custom-tpl" : "");
    card.innerHTML = `<span class="tpl-icon">${tpl.stickers.map(s => s.emoji).join('')}</span><span class="tpl-label">${tpl.label}</span>`;
    card.onclick = () => placeTemplate(tpl.id);
    
    if (tpl.isCustom) {
      const delBtn = document.createElement("span");
      delBtn.className = "custom-tpl-del";
      delBtn.innerHTML = "✕";
      delBtn.onclick = (e) => {
        e.stopPropagation();
        if (confirm(`क्या आप "${tpl.label}" template को हटाना चाहते हैं?`)) {
          deleteCustomTemplate(tpl.id);
        }
      };
      card.appendChild(delBtn);
    }
    
    tplGrid.appendChild(card);
  });

  // Clear all
  const clearBtn = document.createElement("button");
  clearBtn.className = "sticker-clear-btn";
  clearBtn.innerHTML = `
    <svg class="trash-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events:none;display:block;">
      <path class="trash-lid" d="M9 3h6M4 6h16" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
    <span>इस Slide के सभी Stickers हटाएं</span>
  `;
  clearBtn.onclick = () => { if (confirm("क्या आप इस slide के सभी stickers हटाना चाहते हैं?")) clearAllStickers(); };

  wrap.append(tabs, grid, badgeHeader, badgeForm, tplHeaderRow, tplGrid, clearBtn);
  els.panelBody.appendChild(wrap);

}

// Document-level deselect: survives cloneNode DOM replacement
document.addEventListener("pointerup", e => {
  // Close picker dropdown if tap is outside dropdown and toolbar
  const dd = document.querySelector(".sticker-picker-dropdown");
  if (dd && !e.target.closest(".sticker-picker-dropdown") && !e.target.closest(".sticker-toolbar-float")) {
    dd.remove();
  }

  // If the target element was detached from the DOM during event handling (e.g. by a re-render),
  // do not trigger deselect.
  if (!document.contains(e.target)) return;

  if (!state.selectedStickerId) return;
  if (e.target.closest(".slide-sticker, .sticker-sel-box, .sticker-toolbar-float, .sticker-picker-dropdown")) return;
  state.selectedStickerId = null;
  renderStickersOnSlide();
});

loadSlides();


