const contoh = `*أسماء الله الحسنى*`
const anjuran = `

عن ابي هريره رضي الله عنه قال رسول الله صلي اله عليه وسلم : "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ".`

let handler = async (m, { args, usedPrefix, command }) => {
    let json = JSON.parse(JSON.stringify(global.asmaulhusna))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) throw `هذا الأمر يعطيك اسماء الله الحسنى + معناها\nمثال :\n${usedPrefix + command} 1\n`
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `الحد الادني 1 و الاقصي 99!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return m.reply(`الله ${index}
${arabic}
${translation_id}
`.trim())
    }
    m.reply(contoh + data + anjuran)
}
handler.help = ['asmaeallah']
handler.tags = ['islam']
handler.command = /^asmaeallah$/i
handler.limit = 4
handler.register = true
export default handler

global.asmaulhusna = [
    {
        index: 1,
        arabic: "الاسم :الرَّحْمَنُ",
        translation_id: "المعني:واسع الرحمة في خلقه مؤمنهم وكافرهم",

    },
    {
        index: 2,
        arabic: "الاسم : الرَّحِيمُ",
        translation_id: "المعني: المعطي من الثواب أضعاف العمل",

    },
    {
        index: 3,
        arabic: "الاسم : الْمَلِكُ",
        translation_id: "المعني:المتصرّف في ملكه كما يشاء",

    },
    {
        index: 4,
        arabic: "الاسم : الْقُدُّوس",
        translation_id: "المعني:المنزه عن كل وصف يدركه حسٌ أو خيال",

    },
    {
        index: 5,
        arabic: "الاسم : السَّلاَمُ",
        translation_id: "المعني:*السالم من العيوب والنقائص والناشر سلامته على خلقه*",

    },
    {
        index: 6,
        arabic: "الاسم : الْمُؤْمِنُ",
        translation_id: "المعني:المصدق نفسه وكتبه ورسله فيما يقولونه عنه",

    },
    {
        index: 7,
        arabic: "الاسم : الْمُهَيْمِنُ",
        translation_id: "المعني:المسيطر على كل شيء بكماله وقوته",

    },
    {
        index: 8,
        arabic: "الاسم : الْعَزِيزُ",
        translation_id: "المعني:الغالب الذي لا نظير له",

    },
    {
        index: 9,
        arabic: "الاسم : الْجَبَّارُ",
        translation_id: "المعني:المنفذ مشيئته على سبيل الإجبار والجبر",

    },
    {
        index: 10,
        arabic: "الاسم : الْمُتَكَبِّرُ",
        translation_id: "المعني:المتفرد بصفات العظمة والكبرياء",

    },
    {
        index: 11,
        arabic: "الاسم : الْخَالِقُ",
        translation_id: "المعني:المبدع لخلقه بإرادته",

    },
    {
        index: 12,
        arabic: "الاسم : الْبَارِئُ",
        translation_id: "المعني:المميِّز لخلقه بالصور المختلفة",

    },
    {
        index: 13,
        arabic: "الاسم : الْمُصَوِّرُ",
        translation_id: "المعني:*الذي أعطى لكل خلق صورة خاصة*",

    },
    {
        index: 14,
        arabic: "الاسم : الْغَفَّارُ",
        translation_id: "المعني:* الذي يستر القبيح في الدنيا ويتجاوز عنه في الآخرة*",

    },
    {
        index: 15,
        arabic: "الاسم : الْقَهَّارُ",
        translation_id: "المعني:* الذي يقهر الجبابرة*",

    },
    {
        index: 16,
        arabic: "الاسم : الْوَهَّابُ",
        translation_id: "المعني:*المتفضّل بالعطايا*",

    },
    {
        index: 17,
        arabic: "الاسم : الرَّزَّاقُ",
        translation_id: "المعني:*خالق الأرزاق والمتكفّل بإيصالها إلى خلقه*",

    },
    {
        index: 18,
        latin: "Al Fattaah",
        arabic: "الاسم : الْفَتَّاحُ",
        translation_id: "المعني:*الذي يفتح خزائن رحمته لعباده*",

    },
    {
        index: 19,
        arabic: "الاسم : اَلْعَلِيْمُ",
        translation_id: "المعني:* المحيط علمه بكل شيء*",

    },
    {
        index: 20,
        arabic: "الاسم : الْقَابِضُ",
        translation_id: "المعني:*قابض يده عمن يشاء*",

    },
    {
        index: 21,
        arabic: "الاسم : الْبَاسِطُ",
        translation_id: "المعني:*بأسراره ورزقه على من يشاء*",

    },
    {
        index: 22,
        arabic: "الاسم : الْخَافِضُ",
        translation_id: "المعني:* الذي يخفض الكفار والأشقياء المتكبرين*",

    },
    {
        index: 23,
        arabic: "الاسم : الرَّافِعُ",
        translation_id: "*المعني:*للأقدار بين أولياء الرجال، فهو يرفع عباده الطائعين بعبادتهم",

    },
    {
        index: 24,
        arabic: "الاسم : الْمُعِزُّ",
        translation_id: "المعني:*للمؤمنين بطاعته فيعطيهم القوة والغلبة والشدة لمن شاء*",

    },
    {
        index: 25,
        arabic: "الاسم : المُذِلُّ",
        translation_id: "المعني:*للكافرين بعصيانهم*",

    },
    {
        index: 26,
        arabic: "الاسم : السَّمِيعُ",
        translation_id: "المعني:*الذي لا يغيب عنه مسموع، ويحيط بجميع الأصوات الظاهرة والباطنة والخفية والجلية*",

    },
    {
        index: 27,
        arabic: "الاسم : الْبَصِيرُ",
        translation_id: "المعني:*الذي يشاهد جميع الموجودات ويرى الأشياء كلها ظاهرها وباطنها*",

    },
    {
        index: 28,
        arabic: "الاسم : الْحَكَمُ",
        translation_id: "المعني:*الذي إليه ترجع الأمور والأحكام فيفصل بين الحق والباطل ولا راد لقضائه*",

    },
    {
        index: 29,
        arabic: "الاسم : الْعَدْلُ",
        translation_id: "المعني:*الذي ليس في ملكه خلل وهو الذي حرم الظلم على نفسه*",

    },
    {
        index: 30,
        arabic: "الاسم : اللَّطِيفُ",
        translation_id: "المعني:*البرّ الرفيق بعباده يرزق ويحسن إليهم*",

    },
    {
        index: 31,
        arabic: "الاسم : الْخَبِيرُ",
        translation_id: "المعني:*العالم بكل شيء باطن أو ظاهر*",

    },
    {
        index: 32,
        arabic: "الاسم : الْحَلِيمُ",
        translation_id: "المعني:*الذي لا يعجل بالعقاب فهو يمهل ولا يهمل*",

    },
    {
        index: 33,
        arabic: "الاسم : الْعَظِيمُ",
        translation_id: "المعني:الذي لا تصل العقول إلى كُنه ذاته",

    },
    {
        index: 34,
        arabic: "الاسم : الْغَفُورُ",
        translation_id: "المعني:غافر الذنب وقابل التوب",

    },
    {
        index: 35,
        arabic: "الاسم : الشَّكُورُ",
        translation_id: "المعني: المنعم على عباده بالثواب، ويتقبّل أعمال عباده ويُضاعف أجره",

    },
    {
        index: 36,
        arabic: "الاسم : الْعَلِيُّ",
        translation_id: "المعني:الذي علا بذاته وصفاته عن مدارج الخلق",

    },
    {
        index: 37,
        arabic: "الاسم : الْكَبِيرُ",
        translation_id: "المعني: المُنزه عن الأوهام فهو العظيم الذي ليس كمثله شيء",

    },
    {
        index: 38,
        arabic: "الاسم : الْحَفِيظُ",
        translation_id: "المعني:حافظ الكون من الخلل",

    },
    {
        index: 39,
        arabic: "الاسم : المُقيِت",
        translation_id: "المعني:خالق الأقوات ومُقسمها والمتكفّل بإيصالها للمخلوقات",

    },
    {
        index: 40,
        arabic: "الاسم : الْحسِيبُ",
        translation_id: "المعني:الذي يكفي عباده حاجتهم",

    },
    {
        index: 41,
        arabic: "الاسم : الْجَلِيلُ",
        translation_id: "المعني:عظيم القدر بجلاله وكماله",

    },
    {
        index: 42,
        arabic: "الاسم : الْكَرِيمُ",
        translation_id: "المعني:الذي لا ينفذ عطاؤه",

    },
    {
        index: 43,
        arabic: "الاسم : الرَّقِيبُ",
        translation_id: "المعني: الملاحظ لما يرعاهم فهو المراقب لأحوال العباد ويعلم أقوالهم وأفعالهم",

    },
    {
        index: 44,
        arabic: "الاسم : الْمُجِيبُ",
        translation_id: "المعني: الذي يجيب الداعي إذا دعاه والسائل إذا سأله",

    },
    {
        index: 45,
        arabic: "الاسم : الْوَاسِعُ",
        translation_id: "المعني: باعث الموتى للحساب",

    },
    {
        index: 46,
        arabic: "الاسم : الْحَكِيمُ",
        translation_id: "المعني:المُنزه عن فعل ما لا ينبغي بجلاله وكماله، المحقق في تدبيره، اللطيف في تقديره",

    },
    {
        index: 47,
        arabic: "الاسم : الْوَدُودُ",
        translation_id: "- المعني: المتحبب إلى خلقه محب لهم والمحبوب في قلوب أوليائه",

    },
    {
        index: 48,
        arabic: "الاسم : الْمَجِيدُ",
        translation_id: "المعني:الشريف في ذاته وأفعاله، والجزيل في عطائه",

    },
    {
        index: 49,
        arabic: "الاسم : الْبَاعِثُ",
        translation_id: "- المعني:باعث الموتى للحساب",

    },
    {
        index: 50,
        arabic: "الاسم : الشَّهِيدُ",
        translation_id: "المعني: الحاضر الذي لا يغيب عنه شيء فهو العالم بالأمور ظاهرها وباطنها",

    },
    {
        index: 51,
        arabic: "الاسم : الْحَقُّ",
        translation_id: "المعني:خالق كل شيء بحكمة",

    },
    {
        index: 52,
        arabic: "الاسم : الْوَكِيلُ",
        translation_id: "المعني:الكفيل بالخلق القائم بأمورهم فهو الموكول إليه الأمور كلها",

    },
    {
        index: 53,
        arabic: "الاسم : الْقَوِيُّ",
        translation_id: "المعني:الذي لا يعجزه شيء وصاحب القدرة التامة البالغة الكمال",

    },
    {
        index: 54,
        arabic: "الاسم : الْمَتِينُ",
        translation_id: "المعني:الذي لا يُغلب ولا يحتاج إلى مدد وعون في إمضاء حكمه",

    },
    {
        index: 55,
        arabic: "الاسم : الْوَلِيُّ",
        translation_id: "المعني:المحب لأوليائه الناصر لهم",

    },
    {
        index: 56,
        arabic: "الاسم : الْحَمِيدُ",
        translation_id: "المعني:المستحق للحمد والثناء",

    },
    {
        index: 57,
        arabic: "الاسم : الْمُحْصِي",
        translation_id: "المعني: الذي أحصى كل شيء بعلمه، الذي أحاط كل مخلوقاته بعلمه",

    },
    {
        index: 58,
        arabic: "الاسم : الْمُبْدِئُ",
        translation_id: "المعني:الذي بدأ الخلق وأوجده من العدم",

    },
    {
        index: 59,
        arabic: "الاسم : الْمُعِيدُ",
        translation_id: "المعني:الذي يعيد الخلق إلى الموت",

    },
    {
        index: 60,
        arabic: "الاسم : الْمُحْيِي",
        translation_id: "المعني:الذي يحيي العظام وهي رميم",

    },
    {
        index: 61,
        arabic: "الاسم : اَلْمُمِيتُ",
        translation_id: "المعني: الذي يميت الأجسام بنزع الأرواح منها",

    },
    {
        index: 62,
        arabic: "الاسم : الْحَيُّ",
        translation_id: "المعني:المتصف بالحياة الأبدية",

    },
    {
        index: 63,
        arabic: "الاسم : الْقَيُّومُ",
        translation_id: "المعني: القائم بنفسه الغني عن غيره",

    },
    {
        index: 64,
        arabic: "الاسم : الْوَاجِدُ",
        translation_id: "- المعني: الذي يجد كل ما يطلبه ويريده",

    },
    {
        index: 65,
        arabic: "الاسم : الْمَاجِدُ",
        translation_id: "المعني:كبير الإحسان والأفضال",

    },
    {
        index: 66,
        arabic: "الاسم : الْواحِدُ",
        translation_id: "المعني: المتفرد ذاتًا ووصفًا وأفعالً",

    },
    {
        index: 67,
        arabic: "الاسم : اَلاَحَدُ",
        translation_id: "المعني:ليس معه غيره",

    },
    {
        index: 68,
        arabic: "الاسم : الصَّمَدُ",
        translation_id: "المعني: المقصود بالحوائج، فهو المطاع الذي لا يقضى دونه أمر",

    },
    {
        index: 69,
        arabic: "الاسم : الْقَادِرُ",
        translation_id: "المعني: المتفرد باختراع الموجودات",

    },
    {
        index: 70,
        arabic: "الاسم : الْمُقْتَدِرُ",
        translation_id: "المعني:المتفرد باختراع الموجودات",

    },
    {
        index: 71,
        arabic: "الاسم : الْمُقَدِّمُ",
        translation_id: "المعني:يقدم الاشياء ويضعها في مواضعها ، فمن استحق التقديم قدمه",

    },
    {
        index: 72,
        arabic: "الاسم : الْمُؤَخِّرُ",
        translation_id: "المعني:مؤخر الأعداء بالإبعاد",

    },
    {
        index: 73,
        arabic: "الاسم : الأوَّلُ",
        translation_id: "المعني:السابق للأشياء",

    },
    {
        index: 74,
        arabic: "الاسم : الآخِرُ",
        translation_id: "المعني:الباقي بعد فناء خلقه",

    },
    {
        index: 75,
        arabic: "الاسم : الظَّاهِرُ",
        translation_id: "المعني:بآياته وعلامات قدرته",

    },
    {
        index: 76,
        arabic: "الاسم : الْبَاطِنُ",
        translation_id: "المعني:المحتجب عن الأنظار والمطلع على الأسرار",

    },
    {
        index: 77,
        arabic: "الاسم : الْوَالِي",
        translation_id: "المعني:المالك للأشياء والمتصرف فيها كيف يشاء",

    },
    {
        index: 78,
        arabic: "الاسم : الْمُتَعَالِي",
        translation_id: "المعني:رفيع الدرجات ذو العرش المرتفع في كبريائه وعظمته",

    },
    {
        index: 79,
        arabic: "الاسم : الْبَرُّ",
        translation_id: "المعني:الذي يمنُّ على السائلين بحسن العطاء",

    },
    {
        index: 80,
        arabic: "الاسم : التَّوَابُ",
        translation_id: "المعني:يقبل التوبة عن عباده ويعفو عن سيئاتهم",

    },
    {
        index: 81,
        arabic: "الاسم : الْمُنْتَقِمُ",
        translation_id: "المعني:الذي نخشى نقمته لقدرته وعظمته",

    },
    {
        index: 82,
        arabic: "الاسم : العَفُوُّ",
        translation_id: "المعني:الذي يمحو الذنوب ويتجاوز عن السيئات",

    },
    {
        index: 83,
        arabic: "الاسم : الرَّؤُوفُ",
        translation_id: "المعني:شديد الرحمة بعباده",

    },
    {
        index: 84,
        arabic: "الاسم : مَالِكُ الْمُلْكِ",
        translation_id: "المعني: له التصرف المطلق وهو تعالى الذي ينفذ مشيئته في ملكه كيف يشاء وكما يشاء",

    },
    {
        index: 85,
        arabic: "الاسم : ذُوالْجَلاَلِوَالإكْرَامِ",
        translation_id: "المعني:المنفرد بصفات الجلال والكمال والعظمة المختص بالإكرام والكرامة",

    },
    {
        index: 86,
        arabic: "الاسم : الْمُقْسِطُ",
        translation_id: "المعني:القائم بالقسط والمقيم بالعدل",

    },
    {
        index: 87,
        arabic: "الاسم : الْجَامِعُ",
        translation_id: "- المعني:الذي جمع الكمالات كلها ذاتًا ووصفًا وفعلًا",

    },
    {
        index: 88,
        arabic: "الاسم : الْغَنِيُّ",
        translation_id: "المعني:الذي لا يحتاج إلى شيء",

    },
    {
        index: 89,
        arabic: "الاسم : الْمُغْنِي",
        translation_id: "المعني:المعطي لمن يشاء من عباده",

    },
    {
        index: 90,
        arabic: "الاسم : اَلْمَانِعُ",
        translation_id: "المعني:الذي يمنع البلاء حفظًا وعناية، ويمنع العطاء عمن يشاء ابتلاء وحماية",

    },
    {
        index: 91,
        arabic: "الاسم : الضَّارَّ",
        translation_id: "المعني:هو المقدر للضر لمن يشاء",

    },
    {
        index: 92,
        arabic: "الاسم : النَّافِعُ",
        translation_id: "المعني:المقدر للنفع ومالكه",

    },
    {
        index: 93,
        arabic: "الاسم : النُّورُ",
        translation_id: "المعني:الهادي الرشيد الذي أرشد ونور قلوب الصادقين بتوحيده",

    },
    {
        index: 94,
        arabic: "الاسم : الْهَادِي",
        translation_id: "المعني: الذي أعطى كل شيء خلقه ثم هدى، المبين لطريق الحق",

    },
    {
        index: 95,
        arabic: "الاسم : الْبَدِيعُ",
        translation_id: "المعني:الذي لا يماثله أحد في صفاته ولا في أفعاله ولا في أحكامه أو أي أمر من أموره",

    },
    {
        index: 96,
        arabic: "الاسم : اَلْبَاقِي",
        translation_id: "المعني: الدائم الوجود الموصوف بالبقاء",

    },
    {
        index: 97,
        arabic: "الاسم : الْوَارِثُ",
        translation_id: "المعني:من له ما في السماوات والأرض، رب كل شيء ووارثه ورازقه وراحمه",

    },
    {
        index: 98,
        arabic: "الاسم : الرَّشِيدُ",
        translation_id: "المعني: المرشد لأهل الطاعة، فأرشد من شاء بإرشاده وأشقى من شاء بإبعاده",

    },
    {
        index: 99,
        arabic: "الاسم : الصَّبُورُ",
        translation_id: "المعني:الذي يمهل وينظر ولا يعجل ولا يعاجل ولا يسارع وينزل الأمر بقدر معلوم",

    }
]
