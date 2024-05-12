let handler  = async (m, { conn }) => {
conn.reply(m.chat,`『 ${pickRandom(global.twidbix)} 』`, m)
}
handler.help = ['mksjsdh']
handler.tags = ['fun']
handler.command = /انصح|Advice|نصيحة|إنصح/i
handler.limit = 4
handler.register = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.twidbix = [
    "استغفر الله العظيم وأتوب إليه",
    "تذكر دائمًا قول الله تعالى: { وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ } [الذاريات: 56]",
    "اعمل على تحقيق مقصود الخلق وهو العبادة لله وحده",
    "تذكر دائمًا قول الله تعالى: { وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا ۗ إِنَّ اللَّهَ لَغَفُورٌ رَّحِيمٌ } [النحل: 18]",
    "كن شاكرًا لله على كل نعمة ولو بسيطة تمتلكها",
    "ابحث عن العلم النافع واجعله طريقًا للقرب من الله",
    "تذكر دائمًا قول الله تعالى: { وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ } [يوسف: 87]",
    "ابحث عن السعادة في قرب الله ورضاه وليس في ملذات الدنيا",
    "تذكر دائمًا قول الله تعالى: { إِنَّ مَعَ الْعُسْرِ يُسْرًا } [الشرح: 6]",
    "اعلم أن الصعاب في الحياة تأتي بعدها يسر وفرج من الله",
    "تذكر دائمًا قول الله تعالى: { وَمَا أَصَابَكُم مِّن مُّصِيبَةٍ فَبِمَا كَسَبَتْ أَيْدِيكُمْ وَيَعْفُو عَن كَثِيرٍ } [الشورى: 30]",
    "اعلم أن كل مصيبة تأتيك هي بقضاء الله وقدره وعليك الصبر والتسليم",
    "تذكر دائمًا قول الله تعالى: { إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا وَّالَّذِينَ هُم مُّحْسِنُونَ } [النحل: 128]",
    "اعمل باتقان واحسن في الأعمال وتوكل على الله في النجاح",
    "تذكر دائمًا قول الله تعالى: { وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ } [البقرة: 155]",
    "اعلم أن الابتلاءات في الحياة تزيدك قوة وصبرًا إذا صبرت واحتسبت",
    "تذكر دائمًا قول الله تعالى: { فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا } [الشرح: 5-6]",
    "ابحث عن السهولة بعد الصعوبة والفرج بعد الكرب في رحمة الله",
    "تذكر دائمًا قول الله تعالى: { إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ } [البقرة: 222]",
    "ابتغِ رضا الله بالتوبة والاستغفار والنقاء من الذنوب والخطايا",
    "تذكر دائمًا قول الله تعالى: { وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ } [العنكبوت: 69]",
    "ابذل جهدك في سبيل الله واجعل طريقك إلى الخير مستمرًا",
    "تذكر دائمًا قول الله تعالى: { وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ ۖ وَسَتُرَدُّونَ إِلَىٰ عَالِمِ الْغَيْبِ وَالشَّهَادَةِ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ } [التوبة: 105]",
    "كن مجتهدًا في العمل الصالح واعلم أن الله سيجازيك على كل عمل صالح",
    "تذكر دائمًا قول الله تعالى: { يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ } [البقرة: 153]",
    "ابحث عن النصرة من الله بالصبر والصلاة والدعاء في كل أمر",
    "تذكر دائمًا قول الله تعالى: { وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ } [العنكبوت: 69]",
    "ابذل جهدك في سبيل الله واجعل طريقك إلى الخير مستمرًا",
    "تذكر دائمًا قول الله تعالى: { وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ ۖ وَسَتُرَدُّونَ إِلَىٰ عَالِمِ الْغَيْبِ وَالشَّهَادَةِ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ } [التوبة: 105]",
    "كن مجتهدًا في العمل الصالح واعلم أن الله سيجازيك على كل عمل صالح",
    "تذكر دائمًا قول الله تعالى: { يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ } [البقرة: 153]",
    "ابحث عن النصرة من الله بالصبر والصلاة والدعاء في كل أمر",
    "تذكر دائمًا قول الله تعالى: { يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ } [البقرة: 185]",
    "اعمل بجدية على تحقيق الخير واليسر في الحياة وثق بقدرة الله",
    "تذكر دائمًا قول الله تعالى: { وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ ۖ وَعَسَىٰ أَن تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَّكُمْ ۗ وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ } [البقرة: 216]",
    "تذكر أن الله يعلم ما في الصدور ويعلم الغيب فثق به وابتسم دائمًا",
    "اعلم أن الحزن والضيقات تأتي بعدها فرج وسعادة من الله",
    "تذكر دائمًا قول الله تعالى: { وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ } [يوسف: 87]",
    "تعلم أن الأمل برحمة الله يجلب السعادة والطمأنينة في الحياة",
    "تذكر دائمًا قول الله تعالى: { وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا ۗ إِنَّ اللَّهَ لَغَفُورٌ رَّحِيمٌ } [النحل: 18]",
    "كن شاكرًا لله على كل نعمة ولو بسيطة تمتلكها",
    "تذكر أن كل ما تقوم به في الدنيا سيحاسب عليه يوم القيامة",
    "تعلم فنون الدعوة إلى الله واجعلها جزءًا من حياتك اليومية",
    "احرص على قراءة السيرة النبوية والتأمل في قصص الأنبياء",
    "اجتنب الأمور المشكوك فيها والمحرمات واعمل بما هو مباح ومشروع",
    "كن مثالاً حياً للإسلام بتصرفاتك وأخلاقك",
    "تذكر أن الصدقة تطفئ غضب الرب، فكن من المتصدقين",
    "تذكر دائماً قول الله تعالى: { إِنَّ اللَّهَ مَعَ الصَّابِرِينَ } [البقرة: 153]",
    "اجعل الاستغفار والدعاء جزءًا من حياتك اليومية",
    "كن ممن يتصدق على الفقراء والمساكين ويحسن إليهم",
    "تذكر دائماً قول الله تعالى: { وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ } [البقرة: 43]",
    "ابحث عن العلم الشرعي واجتهد في تحصيله وتطبيقه",
    "تذكر أن الدنيا متاع وليست مقصودة، فلا تُغرك بها",
    "تعلم أن الله يرى ما تعمل فكن مخلصاً في أعمالك",
    "تذكر دائماً قول الله تعالى: { وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ } [الذاريات: 56]",
    "ابحث عن الأخلاق الإسلامية واجتهد في تحسينها",
    "تعلم أن الصبر على الطاعات أهم من الصبر على المعاصي",
    "تذكر دائماً أن الله يحب المحسنين والمتقين",
    "ابحث عن السعادة الحقيقية في طاعة الله واتباع سنة رسوله",
    "اجعل الإيمان والتقوى هما قوتك الدافعة في الحياة",
    "تذكر أن الله يغفر الذنوب ويرحم العباد المتوبين",
    "تعلم أن الدعاء سلاح المؤمن فكن دائم الدعاء",
    "احرص على التواضع وتجنب الكبرياء والغرور",
    "تذكر دائماً قول الله تعالى: { وَمَا عِندَ اللَّهِ خَيْرٌ وَأَبْقَىٰ لِلَّذِينَ آمَنُوا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ } [الشورى: 36]",
    "كن ممن يتذكر الموت ويحسن الاستعداد له",
    "اعمل على توجيه الناس للخير وتحذيرهم من الشر",
    "تذكر دائماً قول الله تعالى: { إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا وَّالَّذِينَ هُم مُّحْسِنُونَ } [النحل: 128]",
    "اعمل بجدية على تحقيق الهدف الأسمى في الدنيا والآخرة",
    "تذكر دائماً أن الله يحب المتقين والمتصدقين",
    "تعلم أن الدعاء يغير القدر ويفتح أبواب الرحمة",
    "كن ممن يحافظ على الصلاة ويؤديها في أوقاتها المحددة",
    "تذكر دائماً أن الله يمهل ولا يهمل، فابحث عن توبة قبل الموت",
    "ابتعد عن المعصية وتجنب ما يغضب الله",
    "تذكر دائماً قول الله تعالى: { وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا } [الطلاق: 2]",
    "اعمل على توجيه الناس للخير وتحذيرهم من الشر",
    "تذكر دائماً قول الله تعالى: { وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ } [النجم: 39]",
    "اجتهد في تحقيق الأمنيات بالدعاء والتوكل على الله",
    "تذكر دائماً أن الله يعلم ما في الصدور ويجازي بالخير",
    "كن ممن يسعى للخير والبركة في كل أموره",
    "تذكر دائماً قول الله تعالى: { وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا } [المزمل: 20]",
    "ابذل جهدك في العمل الصالح واستثمر وقتك فيه",
    "تذكر دائماً أن الله يقدر ولا يرد، فثق بقدرته وعدله",
    "اعمل على تحقيق السلام الداخلي من خلال التقرب إلى الله",
    "تذكر دائماً قول الله تعالى: { فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ } [البقرة: 152]",
    "احرص على التواضع وتجنب الكبرياء والغرور",
    "تذكر دائماً أن الله يسمع دعاء المضطر فلا تيأس",
    "ابحث عن السعادة الحقيقية في قرب الله وطاعته",
    "تذكر دائماً قول الله تعالى: { وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ وَبَشِّرِ الصَّابِرِينَ } [البقرة: 155]",
    "تذكر أن الله يعلم سرك وعلانيتك فاعمل بتقوى واستحياء منه",
    "اجعل الاستغفار والتوبة عادة يومية في حياتك",
    "تذكر دائماً قول الله تعالى: { وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ } [العنكبوت: 69]",
    "اعمل على الحفاظ على الأمانة والصدق في جميع الأمور",
    "تذكر دائماً أن الله يحب العباد الذين يتواضعون",
    "تعلم أن الله يبتلي العباد بالأمور ليختبر صبرهم وايمانهم",
    "تذكر دائماً قول الله تعالى: { يُؤْتُونَ مَا آتَوا وَقُلُوبُهُمْ وَجِلَةٌ أَنَّهُمْ إِلَىٰ رَبِّهِمْ رَاجِعُونَ } [المؤمنون: 60]",
    "صلِّ على النبي محمد صلى الله عليه وسلم",
    "اقرأ القرآن يومياً وتدبر معانيه",
    "حافظ على صلاتك الخمس وأدِّ الفروض في أوقاتها",
    "تعلَّم أحكام الدين واعمل بها",
    "أكثر من ذكر الله والاستغفار",
    "أحسن خلقك وكن حليماً مع الناس",
    "زد في الصدقة وتصدق بما تستطيع",
    "حافظ على صلة الرحم واحسن إليها",
    "أكثر من الدعاء وتضرع إلى الله بالخشوع",
    "احرص على طاعة الوالدين",
    "لا تقطع رجاء الخير من الناس",
    "تواضع واعتبر نفسك أدنى من الناس",
    "استشعر قدرة الله وتوكل عليه",
    "اجتنب الربا والمحرمات وكن أميناً في التعامل",
    "كن محافظاً على الحياء والعفة",
    "تجنب الغيبة والنميمة والشك والظن",
    "قم بالعمل الصالح والخيرات بلا انتظار",
    "احذر الكبرياء والاستكبرار",
    "قم بزيارة المساجد والاجتماع بالصالحين",
    "تجنب المعاصي والذنوب واستغفر لذلك",
    "كن محباً للخير وساعد الناس على قدر استطاعتك",
    "احرص على العلم وطلب العلم الشرعي",
    "تعلَّم فنون الدعوة والتبليغ بالحكمة والموعظة الحسنة",
    "حافظ على الصدقة الجارية والوصية الصالحة",
    "كن صاحب أخلاق حميدة وأخلاق إسلامية",
    "تحلَّى بالصبر والشكر في السراء والضراء",
    "كن صادقاً في القول والعمل والوعد",
    "تعاهد بقول الحق والدفاع عنه",
    "لا تحقرن من المعروف شيئاً، حتى إن كانت نصيحة بسيطة",
    "تجنب الخوض في الشبهات واعتبر الحلال واضحاً والحرام واضحاً",
    "كن محافظاً على الصلاة بالجماعة ولا تُهملها",
    "احذر من الإسراف في الأكل والشرب والملذات",
    "حافظ على الأمانة ولا تخون الأمانة في أي حال من الأحوال",
    "اعتنِ بالفقراء والمساكين وساعدهم قدر المستطاع",
    "كن مع الله في السر والعلانية واخشَ الله في الخفية",
    "احرص على إقامة العدل والمساواة بين الناس",
    "تحلَّى بالتواضع والاعتزاز بالخلق الحسن",
    "كن محباً للصلاح والطاعة وابتعد عن المعصية والفساد",
    "تجنب الفتن والمحن وابحث عن السلام والطمأنينة",
    "احذر من الغضب واعتبره من أخطر الأمراض النفسية",
    "كن ممن يخشى الله في الغيب ويعملون لآخرتهم",
    "تعلَّم أخلاق الرسول صلى الله عليه وسلم واتبع سنته",
    "تجنب الكذب والخيانة واعمل بالصدق والأمانة",
    "احرص على الإحسان إلى الآخرين ولو بكلمة طيبة",
    "كن ممن يحافظ على العهود والوعود ولا ينكث بالعهد",
    "تحلَّى بالرأفة والمرحمة واحترام الضعفاء والفقراء",
    "تجنب البخل واعمل بالسخاء والكرم والتساهل",
    "كن مستعداً للتوبة والاستغفار في كل حين وموقف",
    "تعلم أن الدنيا متاع وزخرفة ولا تغرك بها",
    "توقَّ للموت واعمل ليوم القيامة والحساب",
    "احرص على إخلاص النية في كل الأعمال والأقوال",
    "اعمل بمبدأ الأمانة والوفاء في كل العلاقات والمعاملات"
];
