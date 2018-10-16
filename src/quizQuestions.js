import CandaGoose from './images/canada.JPG';
import GreylagGoose from './images/greylag.JPG';

const quizQuestions = [
	{
		question: "What type of goose is this?",
		image: `${GreylagGoose}`,
		correctAnswer: "Greylag goose",
		answers: ["Brent goose", "Canada goose", "Greylag goose", "Bean goose"],
		url: "greylag-goose",
		latinName: "Anser anser",
		averageWeight: "2.9 to 3.7kg",
		ukPopulation: "46,000 pairs",
		quizAltText: "Latin name is anser anser, weighs 3.3kg on average and there are 46,000 pairs in the UK",
		description: " The greylag goose (Anser anser) is a species of large goose in the waterfowl family Anatidae and the type species of the genus Anser. It has mottled and barred grey and white plumage and an orange beak and pink legs. It is the type species of the genus Anser and is the ancestor of the domestic goose, having been domesticated at least as early as 1360 BC. The genus name is from anser, the Latin for 'goose'."
	},
	{
		question: "What type of goose is this?",
		image: "https://thumb7.shutterstock.com/display_pic_with_logo/517861/176951771/stock-photo-greater-white-fronted-goose-176951771.jpg",
		correctAnswer: "Greater white fronted goose",
		answers: ["Greylag goose", "Greater white fronted goose", "Chinese goose", "Pink footed goose"],
		url: "greater-white-fronted-goose",
		latinName: "Anser albifrons",
		averageWeight: "1.9 to 2.5kg",
		ukPopulation: "UK Wintering: 2,400",
		quizAltText: "Latin name is anser albifrons, weighs 1.9 to 2.5kg on average and it has a UK Wintering population of 2,400",
		description: "The greater white-fronted goose (Anser albifrons) is a species of goose related to the smaller lesser white-fronted goose (A. erythropus). It is named for the patch of white feathers bordering the base of its bill, in fact albifrons comes from the Latin albus 'white' and frons 'forehead'. In Europe it has been known as simply 'white-fronted goose'; in North America it is known as the greater white-fronted goose (or 'greater whitefront'), and this name is also increasingly adopted internationally. Even more distinctive are the salt-and-pepper markings on the breast of adult birds, which is why the goose is colloquially called the 'specklebelly' in North America."
	},
	{
		question: "What type of goose is this?",
		image: "https://thumb9.shutterstock.com/display_pic_with_logo/2270711/187360778/stock-photo-bean-goose-187360778.jpg",
		correctAnswer: "Bean goose",
		answers: ["Pink footed goose", "Chinese goose", "Bean goose", "Brent goose"],
		url: "bean-goose",
		latinName: "Anser serrirostris",
		averageWeight: "1.9 to 3.3kg",
		ukPopulation: "UK Wintering: 320",
		quizAltText: "Latin name is Anser serrirostris, weighs 1.9 to 3.3kg on average and it has a UK Wintering population of 320",
		description: "The bean goose is a goose that breeds in northern Europe and Asia. It has two distinct varieties, one inhabiting taiga habitats and one inhabiting tundra. These are recognised as separate species by the American Ornithologists' Union and the IOC (taiga bean goose and tundra bean goose), but are considered a single species by other authorities, such as the British Ornithologists' Union. It is migratory and winters further south in Europe and Asia."
	},
	{
		question: "What type of goose is this?",
		image: "https://thumb1.shutterstock.com/display_pic_with_logo/518803/271545113/stock-photo-chinese-goose-closeup-in-a-poultry-farm-271545113.jpg",
		correctAnswer: "Chinese goose",
		answers: ["Chinese goose", "Canada goose", "Bean goose", "Greylag goose"],
		url: "chinese-goose",
		latinName: "Anser cygnoides",
		averageWeight: "5 to 10kg",
		ukPopulation: "unclear",
		quizAltText: "Latin name is Anser cygnoides, weighs 5 to 10 on average and it is unclear how many live in the UK",
		description: "The Chinese goose is a breed of domesticated goose descended from the wild swan goose. Chinese geese differ from the wild birds in much larger size (up to 5–10 kg in males, 4–9 kg in females), and in having an often strongly developed basal knob on the upper side of the bill. The knob at the top of the beak is more prominent on males than females. By 6–8 weeks of age, the knob is already pronounced enough that it can be used for determining gender. Chinese geese are a close cousin of the African goose, a heavier breed also descended from the swan goose."
	},	
	{
		question: "What type of goose is this?",
		image: "https://thumb7.shutterstock.com/display_pic_with_logo/1699051/178187834/stock-photo-portrait-of-a-male-dark-bellied-brent-goose-the-netherlands-178187834.jpg",
		correctAnswer: "Brent goose",
		answers: ["Egyptian goose", "Greater white fronted goose", "Bean goose", "Brent goose"],
		url: "brent-goose",
		latinName: "Branta bernicla",
		averageWeight: "1.3 to 1.6kg",
		ukPopulation: "102,000 UK wintering: 102,000",
		quizAltText: "Latin name is Branta bernicla, it weighs 1.3 to 1.6kg on average, and it has a UK Wintering population of 102,000",
		description: "The brant is a small goose with a short, stubby bill. The under-tail is pure white, and the tail black and very short (the shortest of any goose).The body of the dark-bellied form is fairly uniformly dark grey-brown all over, the flanks and belly not significantly paler than the back. The head and neck are black, with a small white patch on either side of the neck. It breeds on the Arctic coasts of central and western Siberia and winters in western Europe, with over half the population in southern England, the rest between northern Germany and northern France."
	},
	{
		question: "What type of goose is this?",
		image: "https://thumb9.shutterstock.com/display_pic_with_logo/161300779/461700892/stock-photo-barnacle-goose-branta-leucopsis-barents-sea-coast-timan-tundra-russia-461700892.jpg",
		correctAnswer: "Barnacle goose",
		answers: ["Egyptian goose", "Barnacle goose", "Brent goose", "Canada goose"],
		url: "barnacle-goose",
		latinName: "Branta leucopsis",
		averageWeight: "1.3 to 2.2kg",
		ukPopulation: "900 pairs",
		quizAltText: "Latin name is Branta leucopsis, weighs 1.3 to 2.2kg on average and there are 900 pairs in the UK",
		description: "The barnacle goose (Branta leucopsis) belongs to the genus Branta of black geese, which contains species with largely black plumage, distinguishing them from the grey Anser species. Despite its superficial similarity to the brant goose, genetic analysis has shown it is an eastern derivative of the cackling goose lineage.It has a white face and black head, neck, and upper breast. Its belly is white. The wings and its back are silver-gray with black-and-white bars that look like they are shining when the light reflects on it. During flight, a V-shaped white rump patch and the silver-gray underwing linings are visible.  Barnacle geese breed mainly on the Arctic islands of the North Atlantic."
	},
	{
		question: "What type of goose is this?",
		image: `${CandaGoose}`,
		correctAnswer: "Canada goose",
		answers: ["Canada goose", "Greylag goose", "Barnacle goose", "Chinese goose"],
		url: "canada-goose",
		latinName: "Branta canadensis",
		averageWeight: "4.3-5kg",
		ukPopulation: "62,000 pairs",
		quizAltText: "Latin name is Branta canadensis, weighs 4.3-5kg on average and there are 62,000 pairs in the UK",
		description: "The Canada goose (Branta canadensis) is a large wild goose species with a black head and neck, white cheeks, white under its chin, and a brown body. Native to arctic and temperate regions of North America, its migration occasionally reaches northern Europe. It has been introduced to the United Kingdom, New Zealand, Argentina, Chile, and the Falkland Islands. Like most geese, the Canada goose is primarily herbivorous and normally migratory; it tends to be found on or close to fresh water."
	},
	{
		question: "What type of goose is this?",
		image: "https://thumb9.shutterstock.com/display_pic_with_logo/770932/625318562/stock-photo-egyptian-goose-alopochen-aegyptiacus-625318562.jpg",
		correctAnswer: "Egyptian goose",
		answers: ["Pink footed goose", "Egyptian goose", "Greater white fronted goose", "Bean goose"],
		url: "egyptian-goose",
		latinName: "Alopochen aegyptiaca",
		averageWeight: "1.5 to 2.25kg",
		ukPopulation: "1,100 pairs",
		quizAltText: "Latin name is Alopochen aegyptiaca, weighs 1.5 to 2.25kg on average and there are 1,100 pairs in the UK",
		description: "The Egyptian goose (Alopochen aegyptiaca) is a member of the duck, goose, and swan family Anatidae. It is native to Africa south of the Sahara and the Nile Valley. Egyptian geese were considered sacred by the Ancient Egyptians, and appeared in much of their artwork. Because of their popularity chiefly as an ornamental bird, escapees are common and feral populations have become established in Western Europe. The Egyptian goose has escaped or been deliberately released in to Florida, USA. However Egyptian geese are also now present in many parts of Central and Southeastern Texas  The Egyptian goose is believed to be most closely related to the shelducks (genus Tadorna) and their relatives, and is placed with them in the subfamily Tadorninae. "
	},
	{
		question: "What type of goose is this?",
		image: "https://thumb1.shutterstock.com/display_pic_with_logo/1149083/152223113/stock-photo-pink-footed-goose-anser-brachyrhynchus-scotland-spring-152223113.jpg",
		correctAnswer: "Pink footed goose",
		answers: ["Chinese goose", "Greater white fronted goose", "Bean goose", "Pink footed goose"],
		url: "pink-footed-goose",
		latinName: "Anser brachyrhynchus",
		averageWeight: "2.2 to 2.7kg",
		ukPopulation: "UK Wintering: 360,000",
		quizAltText: "Latin name is Anser brachyrhynchus, weighs 2.2 to 2.7kg on average and has a UK Wintering population of 360,000",
		description: "The pink-footed goose (Anser brachyrhynchus) is a goose which breeds in eastern Greenland, Iceland and Svalbard. It is migratory, wintering in northwest Europe, especially Ireland, Great Britain, the Netherlands, and western Denmark. The name is often abbreviated in colloquial usage to 'pinkfoot' (plural 'pinkfeet'). Anser is the Latin for 'goose', and brachyrhynchus comes from the Greek brakhus 'short' and rhunkhos 'bill'. It is a medium-sized goose, 60–75 cm (24–30 in) long, the wingspan 135–170 cm (53–67 in), and weighing 1.8–3.4 kg (4.0–7.5 lb). It has a short bill, bright pink in the middle with a black base and tip, and pink feet. The body is mid-grey-brown, the head and neck a richer, darker brown, the rump and vent white, and the tail grey with a broad white tip. The upper wing-coverts are of a somewhat similar pale bluish-grey as in the greylag goose, and the flight feathers blackish-grey. The species is most closely related to the bean goose Anser fabalis (having even been treated as a subspecies of it at times in the past). It produces a medley of high-pitched honking calls, being particularly vocal in flight, with large skeins being almost deafening."
	}
];

export default quizQuestions;