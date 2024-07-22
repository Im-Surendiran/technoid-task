import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Family from "./Pages/Family/Family";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
        translation: {
            title: "English",
            reply: "Replay The Journey",
            description: "After a whole year of patiently, but eagerly waiting, Eid is finally here! Hands up everyone who missed the incense smells, the outfits and the delicious food? But first, let’s get Eid-ready with our outfits.",
            downloadBtn: "Eid Identity",
            sounddescription: "Now that we’re ready in our new Eid outfits, it’s time for Takbeer or Eid prayers. Let’s revel in this beautiful moment. Later, let’s join the family gathering and exchange warm greetings with loved ones.",
            btn1 : "Eid Events Booklet",
            btn2 : "Greeting Cards",
            btn3 : "Houses Decorations",
            btn4 : "Companies Decorations",
            Family: "After that much-needed family time, it’s the kids’ favourite part, Eideyah! Time for them to engage in friendly banter as to who received the most.",
            boxtitle : "Greeting Cards",
            boxdescription : "To share with your loved ones!",
            boxbtn : "Your Greeting",
            btnwrapdescription : "Create your own",

        },
    },
    ar: {
        translation: {
            title: "عربي",
            reply: "عيد الرحلة من جديد",
            description: "هلا هلا بالعيد اللي لنا سنة نستناه ما ننسى البخور ولبس العيد اللي مجهزينه وننتظر اليوم اللي نلبسه",
            downloadBtn: "هوية العيد",
            sounddescription: "بعد الكشخة يبدأ وقت التكبيرات وصلاة العيد وأجوائها الحلوة .. نسلم ونعايد وبعدين نلحق على جمعة العائلة",
            btn1 : "كتيب فعاليات العيد",
            btn2 : "بطاقات المعايدة",
            btn3 : "مطبوعات المنازل",
            btn4 : "مطبوعات الشركات",
            Family : "وبعد التهاني والمعايدات يجي الوقت اللي يكون فيه الصّغار اغنى من أهلهم ويجمعون فيه العيديات ويتسابقون مين يجمّع أكثر",
            boxtitle : "بطاقات المعايدة",
            boxdescription : "حمّل بطاقات المعايدة لتشاركها مع أهلك وناسك",
            boxbtn : "بطاقة معايدتك",
            btnwrapdescription : "أضف معايدتك وشاركها",


        },
    },
},
});

export default i18n;

