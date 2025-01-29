// Check and handle screen orientation
function checkOrientation() {
    const landscapeMessage = document.getElementById('landscape-message');
    const container = document.querySelector('.container');

    if (window.innerHeight > window.innerWidth) {
        // Portrait mode
        landscapeMessage.style.display = 'block';
        container.classList.add('disabled'); // Disable interactions
    } else {
        // Landscape mode
        landscapeMessage.style.display = 'none';
        container.classList.remove('disabled'); // Enable interactions
    }
}

// Add event listeners for orientation change
window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

// Example image URLs array
const imageUrls = [
  "https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(101).jpg",
  "https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(2).heic", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(2).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(2).webp", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(3).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(4).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(1).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(2).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(3).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(4).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(5).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(6).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(7).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(8).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(9).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(10).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(11).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(12).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/From_Artist%20(13).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(12).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(13).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(16).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(17).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(18).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(19).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(20).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(21).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(23).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(24).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(25).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(26).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(27).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(28).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(29).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(30).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(31).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(32).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(33).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(34).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(35).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(36).png", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(37).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(38).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(39).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(40).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(41).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(42).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(43).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(44).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(45).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(46).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(47).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(48).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(49).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(50).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(51).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(52).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(53).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(54).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(55).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(56).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(57).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(58).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(59).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(60).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(61).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(62).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(63).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(64).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(65).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(66).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(67).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(68).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(69).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(70).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(71).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(72).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(73).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(74).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(75).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(76).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(77).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(78).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(79).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(80).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(81).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(82).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(83).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(84).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(85).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(86).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(87).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(88).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(89).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(90).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(91).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(92).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(93).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(94).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(95).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(96).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(97).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(98).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(99).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(100).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(102).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(103).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(104).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(105).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(106).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(107).jpg", 
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(108).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(109).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(110).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(111).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(112).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(113).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(114).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(115).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(116).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(117).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(118).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(119).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(120).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(121).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(122).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(123).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(124).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(125).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(126).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(127).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(128).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(129).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(130).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(131).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(132).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(133).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(134).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(135).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(136).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(137).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(138).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(139).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(140).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(141).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(142).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(143).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(144).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(145).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(146).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(147).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(148).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(149).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(150).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(151).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(152).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(153).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(154).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(155).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(156).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(157).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(158).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(159).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(160).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(161).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(162).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(163).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(164).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(165).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(166).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(167).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(168).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(169).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(170).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(171).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(172).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(173).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(174).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(175).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(176).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(177).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(178).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(179).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(180).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(181).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(182).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(183).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(184).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(185).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(186).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(187).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(188).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(189).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(190).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(191).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(192).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(193).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(194).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(195).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(196).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_%20(197).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist%20(198).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist%20(199).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist%20(200).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist%20(201).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist%20(202).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist%20(203).JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_.heic",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_.jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_.webp",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(2).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(2).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(3).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(3).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(4).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(4).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(5).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(5).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(6).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(6).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(7).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(7).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(8).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(8).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(9).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(9).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(10).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(10).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(11).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(11).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(12).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(12).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(13).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(14).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(14).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(15).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(15).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(16).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(16).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(17).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(13).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(17).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(18).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(18).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(19).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(19).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(20).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(20).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(21).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(21).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(22).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(22).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(23).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(23).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(24).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(24).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(25).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(25).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(26).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(26).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(27).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(27).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(28).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(28).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(29).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(29).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(30).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(30).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(31).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(31).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(32).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(32).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(33).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(33).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(34).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(34).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(35).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(35).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(36).JPG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(36).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(37).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(38).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(39).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(4).jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(4).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(40).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem%20(41).PNG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem.JPEG",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem.jpg",
"https://pub-368ce702e60f480dbdda7c4d3adc9d54.r2.dev/Artist_rem.PNG"


];

// Function to generate the gallery
function generateGallery() {
    const galleryContainer = document.getElementById("gallery-container");

    // Ensure gallery container exists
    if (!galleryContainer) {
        console.error("Gallery container not found!");
        return;
    }
    
    // Loop through the image URLs and create elements
    imageUrls.forEach(url => {
        const picDiv = document.createElement('div');
        picDiv.classList.add('pic');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Photo";
        
        cardDiv.appendChild(img);
        picDiv.appendChild(cardDiv);
        
        const faderDiv = document.createElement('div');
        faderDiv.classList.add('fader');
        picDiv.appendChild(faderDiv);
        
        galleryContainer.appendChild(picDiv);
    });
}

// Call the function to generate the gallery on page load
document.addEventListener("DOMContentLoaded", generateGallery);

// Add click event to the "Next" button
document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById("nextButton");
    
    if (nextButton) {
        nextButton.addEventListener("click", () => {
            window.location.href = "ending.html"; // Redirect to ending.html
        });
    } else {
        console.error("Next button not found!");
    }
});

const fullscreenBtn = document.getElementById('fullscreen-btn');
const container = document.querySelector('.container'); // Use .container instead of .wrapper

// Handle Fullscreen Button Click
fullscreenBtn.addEventListener('click', () => {
    if (window.innerHeight < window.innerWidth) { // Check if in landscape mode
      if (!document.fullscreenElement) {
        container.requestFullscreen().then(() => {
          container.style.overflowY = 'auto'; // Enable scrolling in fullscreen
        }).catch(err => {
          console.warn(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
      }
    }
  })

// Check Orientation and Show Fullscreen Button
function checkOrientation() {
  const landscapeMessage = document.getElementById('landscape-message');

  if (window.innerHeight > window.innerWidth) {
    // Portrait Mode
    landscapeMessage.style.display = 'block';
    fullscreenBtn.style.display = 'none'; // Hide fullscreen button
  } else {
    // Landscape Mode
    landscapeMessage.style.display = 'none';
    fullscreenBtn.style.display = 'block'; // Show fullscreen button
  }
}

// Exit Fullscreen Handling
function handleFullscreenChange() {
    if (!document.fullscreenElement) {
      // Ensure container overflow is restored after exiting fullscreen
      container.style.overflowY = ''; // Reset to default (inherits from body or CSS)
      fullscreenBtn.style.display = 'block'; // Show fullscreen button again
    }
  }

// Listen for Fullscreen Change Events
document.addEventListener('fullscreenchange', handleFullscreenChange);

// Exit Fullscreen on Orientation Change to Portrait
window.addEventListener('orientationchange', () => {
  if (window.innerHeight > window.innerWidth && document.fullscreenElement) {
    document.exitFullscreen().catch(err => {
      console.warn(`Error attempting to exit fullscreen mode: ${err.message}`);
    });
  }
});

// Initial Orientation Check
window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

