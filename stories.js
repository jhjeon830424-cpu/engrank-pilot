/* =========================================================
   잉글리시랭크 — 학년별 이야기(스토리) 콘텐츠
   - 문장/단어는 직접 작성한 정적 데이터 (실행 중 AI 호출 없음)
   - 퀴즈 문제는 이 데이터에서 app.js의 엔진이 매번 다르게 생성함
   ========================================================= */

const STORIES = {
  1: [
    {
      id: 'g1_01', title: 'The Red Apple', titleKo: '빨간 사과',
      sentences: [
        { en: 'I have an apple.', ko: '나는 사과가 있어요.' },
        { en: 'The apple is red.', ko: '그 사과는 빨개요.' },
        { en: 'I like the apple.', ko: '나는 그 사과를 좋아해요.' },
      ],
      vocab: [
        { word: 'apple', ko: '사과' },
        { word: 'red', ko: '빨간' },
        { word: 'like', ko: '좋아하다' },
      ],
    },
    {
      id: 'g1_02', title: 'My Dog', titleKo: '내 강아지',
      sentences: [
        { en: 'I have a dog.', ko: '나는 강아지가 있어요.' },
        { en: 'The dog is small.', ko: '그 강아지는 작아요.' },
        { en: 'The dog can run.', ko: '그 강아지는 달릴 수 있어요.' },
      ],
      vocab: [
        { word: 'dog', ko: '강아지' },
        { word: 'small', ko: '작은' },
        { word: 'run', ko: '달리다' },
      ],
    },
    {
      id: 'g1_03', title: 'The Sun', titleKo: '해님',
      sentences: [
        { en: 'I see the sun.', ko: '나는 해를 봐요.' },
        { en: 'The sun is hot.', ko: '해는 뜨거워요.' },
        { en: 'The sun is up.', ko: '해가 떠 있어요.' },
      ],
      vocab: [
        { word: 'sun', ko: '해, 태양' },
        { word: 'hot', ko: '뜨거운' },
        { word: 'see', ko: '보다' },
      ],
    },
    {
      id: 'g1_04', title: 'A Blue Ball', titleKo: '파란 공',
      sentences: [
        { en: 'I have a ball.', ko: '나는 공이 있어요.' },
        { en: 'The ball is blue.', ko: '그 공은 파래요.' },
        { en: 'I can kick the ball.', ko: '나는 그 공을 찰 수 있어요.' },
      ],
      vocab: [
        { word: 'ball', ko: '공' },
        { word: 'blue', ko: '파란' },
        { word: 'kick', ko: '차다' },
      ],
    },
    {
      id: 'g1_05', title: 'My Family', titleKo: '우리 가족',
      sentences: [
        { en: 'This is my mom.', ko: '이분은 우리 엄마예요.' },
        { en: 'This is my dad.', ko: '이분은 우리 아빠예요.' },
        { en: 'I love my family.', ko: '나는 우리 가족을 사랑해요.' },
      ],
      vocab: [
        { word: 'mom', ko: '엄마' },
        { word: 'dad', ko: '아빠' },
        { word: 'love', ko: '사랑하다' },
      ],
    },
  ],

  2: [
    {
      id: 'g2_01', title: 'My Cat', titleKo: '내 고양이',
      sentences: [
        { en: 'I have a cat.', ko: '나는 고양이가 있어요.' },
        { en: 'My cat is white.', ko: '내 고양이는 하얘요.' },
        { en: 'My cat likes milk.', ko: '내 고양이는 우유를 좋아해요.' },
        { en: 'My cat is very cute.', ko: '내 고양이는 아주 귀여워요.' },
      ],
      vocab: [
        { word: 'cat', ko: '고양이' },
        { word: 'white', ko: '하얀' },
        { word: 'milk', ko: '우유' },
        { word: 'cute', ko: '귀여운' },
      ],
    },
    {
      id: 'g2_02', title: 'A Rainy Day', titleKo: '비 오는 날',
      sentences: [
        { en: 'It is raining today.', ko: '오늘은 비가 와요.' },
        { en: 'I have a yellow umbrella.', ko: '나는 노란 우산이 있어요.' },
        { en: 'I jump in the puddles.', ko: '나는 물웅덩이에서 뛰어놀아요.' },
        { en: 'I love rainy days.', ko: '나는 비 오는 날을 좋아해요.' },
      ],
      vocab: [
        { word: 'rain', ko: '비' },
        { word: 'umbrella', ko: '우산' },
        { word: 'jump', ko: '뛰다' },
        { word: 'yellow', ko: '노란' },
      ],
    },
    {
      id: 'g2_03', title: 'The Big Ball', titleKo: '커다란 공',
      sentences: [
        { en: 'Look at the big ball.', ko: '저 큰 공을 봐요.' },
        { en: 'It is round and green.', ko: '그것은 둥글고 초록색이에요.' },
        { en: 'We play with the ball.', ko: '우리는 그 공을 가지고 놀아요.' },
        { en: 'It is a fun game.', ko: '그것은 재미있는 놀이예요.' },
      ],
      vocab: [
        { word: 'big', ko: '큰' },
        { word: 'round', ko: '둥근' },
        { word: 'green', ko: '초록색의' },
        { word: 'fun', ko: '재미있는' },
      ],
    },
    {
      id: 'g2_04', title: 'At the Zoo', titleKo: '동물원에서',
      sentences: [
        { en: 'We go to the zoo.', ko: '우리는 동물원에 가요.' },
        { en: 'I see a tall giraffe.', ko: '나는 키 큰 기린을 봐요.' },
        { en: 'The lion is very loud.', ko: '사자는 아주 시끄러워요.' },
        { en: 'I have a great day.', ko: '나는 아주 즐거운 하루를 보내요.' },
      ],
      vocab: [
        { word: 'zoo', ko: '동물원' },
        { word: 'giraffe', ko: '기린' },
        { word: 'lion', ko: '사자' },
        { word: 'loud', ko: '시끄러운' },
      ],
    },
    {
      id: 'g2_05', title: 'My Birthday', titleKo: '내 생일',
      sentences: [
        { en: 'Today is my birthday.', ko: '오늘은 내 생일이에요.' },
        { en: 'I have a big cake.', ko: '나는 큰 케이크가 있어요.' },
        { en: 'My friends sing for me.', ko: '내 친구들이 나를 위해 노래해요.' },
        { en: 'I am very happy.', ko: '나는 아주 행복해요.' },
      ],
      vocab: [
        { word: 'birthday', ko: '생일' },
        { word: 'cake', ko: '케이크' },
        { word: 'friend', ko: '친구' },
        { word: 'happy', ko: '행복한' },
      ],
    },
  ],

  3: [
    {
      id: 'g3_01', title: 'A Trip to the Park', titleKo: '공원 나들이',
      sentences: [
        { en: 'On Sunday, we went to the park.', ko: '일요일에 우리는 공원에 갔어요.' },
        { en: 'The weather was warm and sunny.', ko: '날씨는 따뜻하고 화창했어요.' },
        { en: 'I rode my new bicycle there.', ko: '나는 거기서 새 자전거를 탔어요.' },
        { en: 'My sister flew a colorful kite.', ko: '내 여동생은 알록달록한 연을 날렸어요.' },
        { en: 'We had a wonderful afternoon together.', ko: '우리는 함께 멋진 오후를 보냈어요.' },
      ],
      vocab: [
        { word: 'park', ko: '공원' },
        { word: 'warm', ko: '따뜻한' },
        { word: 'bicycle', ko: '자전거' },
        { word: 'kite', ko: '연' },
        { word: 'together', ko: '함께' },
      ],
    },
    {
      id: 'g3_02', title: 'My Best Friend', titleKo: '나의 가장 친한 친구',
      sentences: [
        { en: 'Mina is my best friend.', ko: '미나는 나의 가장 친한 친구예요.' },
        { en: 'We sit next to each other.', ko: '우리는 서로 옆에 앉아요.' },
        { en: 'She is kind and very funny.', ko: '그녀는 친절하고 아주 재미있어요.' },
        { en: 'We share our lunch every day.', ko: '우리는 매일 점심을 나눠 먹어요.' },
        { en: 'I am glad to know her.', ko: '나는 그녀를 알게 되어 기뻐요.' },
      ],
      vocab: [
        { word: 'friend', ko: '친구' },
        { word: 'kind', ko: '친절한' },
        { word: 'funny', ko: '재미있는' },
        { word: 'share', ko: '나누다' },
        { word: 'glad', ko: '기쁜' },
      ],
    },
    {
      id: 'g3_03', title: 'The Little Bird', titleKo: '작은 새',
      sentences: [
        { en: 'A little bird fell from its nest.', ko: '작은 새가 둥지에서 떨어졌어요.' },
        { en: 'Its wing looked hurt and weak.', ko: '날개가 다치고 약해 보였어요.' },
        { en: 'I put it in a warm box.', ko: '나는 그것을 따뜻한 상자에 넣었어요.' },
        { en: 'After a week, the bird got better.', ko: '일주일 후, 그 새는 나아졌어요.' },
        { en: 'Then it flew away happily.', ko: '그리고 그것은 행복하게 날아갔어요.' },
      ],
      vocab: [
        { word: 'bird', ko: '새' },
        { word: 'nest', ko: '둥지' },
        { word: 'wing', ko: '날개' },
        { word: 'hurt', ko: '다친' },
        { word: 'fly', ko: '날다' },
      ],
    },
    {
      id: 'g3_04', title: 'The School Garden', titleKo: '학교 텃밭',
      sentences: [
        { en: 'Our class has a small garden.', ko: '우리 반은 작은 텃밭이 있어요.' },
        { en: 'We planted tomatoes and carrots there.', ko: '우리는 그곳에 토마토와 당근을 심었어요.' },
        { en: 'Every morning, we water the plants.', ko: '매일 아침, 우리는 식물에 물을 줘요.' },
        { en: 'The tomatoes are turning bright red.', ko: '토마토가 밝은 빨간색으로 변하고 있어요.' },
        { en: 'Soon, we can pick and eat them.', ko: '곧 우리는 그것들을 따서 먹을 수 있어요.' },
      ],
      vocab: [
        { word: 'garden', ko: '정원, 텃밭' },
        { word: 'plant', ko: '심다; 식물' },
        { word: 'water', ko: '물을 주다' },
        { word: 'tomato', ko: '토마토' },
        { word: 'pick', ko: '따다' },
      ],
    },
    {
      id: 'g3_05', title: 'Helping Mom', titleKo: '엄마 도와드리기',
      sentences: [
        { en: 'My mom looked very busy today.', ko: '오늘 엄마는 아주 바빠 보였어요.' },
        { en: 'I decided to help her clean.', ko: '나는 엄마 청소를 돕기로 했어요.' },
        { en: 'I washed the dishes carefully.', ko: '나는 조심스럽게 설거지를 했어요.' },
        { en: 'My mom smiled and thanked me.', ko: '엄마는 웃으며 나에게 고마워했어요.' },
        { en: 'It felt great to help her.', ko: '엄마를 도와드리니 기분이 좋았어요.' },
      ],
      vocab: [
        { word: 'busy', ko: '바쁜' },
        { word: 'clean', ko: '청소하다' },
        { word: 'wash', ko: '씻다' },
        { word: 'dish', ko: '접시' },
        { word: 'smile', ko: '웃다' },
      ],
    },
  ],

  4: [
    {
      id: 'g4_01', title: 'A Cold Winter Day', titleKo: '추운 겨울날',
      sentences: [
        { en: 'It snowed heavily last night.', ko: '어젯밤에 눈이 많이 내렸어요.' },
        { en: 'The whole town turned white and quiet.', ko: '마을 전체가 하얗고 조용해졌어요.' },
        { en: 'My friends and I built a snowman.', ko: '내 친구들과 나는 눈사람을 만들었어요.' },
        { en: 'We used carrots for its nose.', ko: '우리는 코 대신 당근을 사용했어요.' },
        { en: 'Our hands were cold, but we laughed a lot.', ko: '손은 시렸지만, 우리는 많이 웃었어요.' },
      ],
      vocab: [
        { word: 'snow', ko: '눈; 눈이 오다' },
        { word: 'quiet', ko: '조용한' },
        { word: 'build', ko: '만들다, 짓다' },
        { word: 'nose', ko: '코' },
        { word: 'laugh', ko: '웃다' },
      ],
    },
    {
      id: 'g4_02', title: 'The Class Election', titleKo: '학급 선거',
      sentences: [
        { en: 'Today, our class chose a new leader.', ko: '오늘, 우리 반은 새 반장을 뽑았어요.' },
        { en: 'Three students gave short speeches.', ko: '세 명의 학생이 짧은 연설을 했어요.' },
        { en: 'Jian promised to help everyone kindly.', ko: '지안이는 모두를 친절하게 돕겠다고 약속했어요.' },
        { en: 'Most students voted for her.', ko: '대부분의 학생들이 그녀에게 투표했어요.' },
        { en: 'She became our new class leader.', ko: '그녀는 우리의 새 반장이 되었어요.' },
      ],
      vocab: [
        { word: 'leader', ko: '지도자, 대표' },
        { word: 'speech', ko: '연설' },
        { word: 'promise', ko: '약속하다' },
        { word: 'vote', ko: '투표하다' },
        { word: 'become', ko: '~이 되다' },
      ],
    },
    {
      id: 'g4_03', title: 'Grandma\'s Kitchen', titleKo: '할머니의 부엌',
      sentences: [
        { en: 'I visited my grandma last weekend.', ko: '지난 주말에 나는 할머니를 찾아뵀어요.' },
        { en: 'Her kitchen smelled like sweet bread.', ko: '할머니 부엌에서 달콤한 빵 냄새가 났어요.' },
        { en: 'She taught me how to bake cookies.', ko: '할머니는 나에게 쿠키 굽는 법을 가르쳐 주셨어요.' },
        { en: 'We mixed flour, sugar, and butter together.', ko: '우리는 밀가루, 설탕, 버터를 함께 섞었어요.' },
        { en: 'The cookies tasted amazing when they were done.', ko: '다 됐을 때 쿠키 맛은 정말 훌륭했어요.' },
      ],
      vocab: [
        { word: 'kitchen', ko: '부엌' },
        { word: 'smell', ko: '냄새가 나다' },
        { word: 'bake', ko: '굽다' },
        { word: 'mix', ko: '섞다' },
        { word: 'taste', ko: '맛이 나다' },
      ],
    },
    {
      id: 'g4_04', title: 'The Field Trip', titleKo: '현장 학습',
      sentences: [
        { en: 'Our class visited a science museum yesterday.', ko: '어제 우리 반은 과학관을 방문했어요.' },
        { en: 'There were many interesting machines to see.', ko: '볼 수 있는 흥미로운 기계들이 많았어요.' },
        { en: 'I tried a robot arm experiment.', ko: '나는 로봇 팔 실험을 해봤어요.' },
        { en: 'My teacher explained how it worked.', ko: '선생님이 그것이 어떻게 작동하는지 설명해 주셨어요.' },
        { en: 'It was the best trip of the year.', ko: '그것은 올해 최고의 여행이었어요.' },
      ],
      vocab: [
        { word: 'museum', ko: '박물관' },
        { word: 'machine', ko: '기계' },
        { word: 'robot', ko: '로봇' },
        { word: 'explain', ko: '설명하다' },
        { word: 'trip', ko: '여행' },
      ],
    },
    {
      id: 'g4_05', title: 'A New Neighbor', titleKo: '새로운 이웃',
      sentences: [
        { en: 'A new family moved in next door.', ko: '새로운 가족이 옆집으로 이사왔어요.' },
        { en: 'They have a boy who is my age.', ko: '그들에게는 나와 나이가 같은 남자아이가 있어요.' },
        { en: 'His name is Junho, and he seems shy.', ko: '그의 이름은 준호인데, 수줍어 보였어요.' },
        { en: 'I invited him to play soccer with us.', ko: '나는 그를 우리와 축구하자고 초대했어요.' },
        { en: 'Now, we are becoming good friends.', ko: '이제 우리는 좋은 친구가 되어가고 있어요.' },
      ],
      vocab: [
        { word: 'neighbor', ko: '이웃' },
        { word: 'move', ko: '이사하다, 움직이다' },
        { word: 'shy', ko: '수줍은' },
        { word: 'invite', ko: '초대하다' },
        { word: 'soccer', ko: '축구' },
      ],
    },
  ],

  5: [
    {
      id: 'g5_01', title: 'The Lost Kitten', titleKo: '길 잃은 아기 고양이',
      sentences: [
        { en: 'On my way home, I heard a soft cry.', ko: '집에 오는 길에, 나는 작은 울음소리를 들었어요.' },
        { en: 'A tiny kitten was hiding under a car.', ko: '작은 아기 고양이가 차 밑에 숨어 있었어요.' },
        { en: 'It looked hungry, scared, and completely alone.', ko: '그것은 배고프고, 무섭고, 완전히 혼자인 것처럼 보였어요.' },
        { en: 'I gently picked it up and held it close.', ko: '나는 조심스럽게 그것을 들어 올려 꼭 안았어요.' },
        { en: 'My family and I decided to take care of it.', ko: '우리 가족과 나는 그것을 돌보기로 결정했어요.' },
        { en: 'Now, the kitten happily lives with us.', ko: '이제 그 고양이는 우리와 행복하게 살고 있어요.' },
      ],
      vocab: [
        { word: 'kitten', ko: '아기 고양이' },
        { word: 'hide', ko: '숨다' },
        { word: 'scared', ko: '무서워하는' },
        { word: 'gently', ko: '부드럽게' },
        { word: 'decide', ko: '결정하다' },
        { word: 'alone', ko: '혼자인' },
      ],
    },
    {
      id: 'g5_02', title: 'A Day at the Beach', titleKo: '해변에서의 하루',
      sentences: [
        { en: 'Last summer, my family traveled to the beach.', ko: '지난 여름, 우리 가족은 해변으로 여행을 갔어요.' },
        { en: 'The ocean waves were tall and exciting.', ko: '바다 파도가 높고 신났어요.' },
        { en: 'My brother and I built a huge sandcastle.', ko: '내 남동생과 나는 커다란 모래성을 만들었어요.' },
        { en: 'Suddenly, a big wave washed it away.', ko: '갑자기, 큰 파도가 그것을 쓸어가 버렸어요.' },
        { en: 'We laughed instead of feeling sad.', ko: '우리는 슬퍼하는 대신 웃었어요.' },
        { en: 'It became one of my favorite memories.', ko: '그것은 내가 가장 좋아하는 추억 중 하나가 되었어요.' },
      ],
      vocab: [
        { word: 'ocean', ko: '바다' },
        { word: 'wave', ko: '파도' },
        { word: 'huge', ko: '거대한' },
        { word: 'suddenly', ko: '갑자기' },
        { word: 'memory', ko: '추억, 기억' },
        { word: 'instead', ko: '대신에' },
      ],
    },
    {
      id: 'g5_03', title: 'The New Student', titleKo: '전학생',
      sentences: [
        { en: 'A new student joined our class this week.', ko: '이번 주에 새로운 학생이 우리 반에 왔어요.' },
        { en: 'Her name is Sora, and she moved from another city.', ko: '그녀의 이름은 소라이고, 다른 도시에서 이사 왔어요.' },
        { en: 'At first, she looked nervous and quiet.', ko: '처음에, 그녀는 긴장하고 조용해 보였어요.' },
        { en: 'I sat next to her and started a conversation.', ko: '나는 그녀 옆에 앉아 대화를 시작했어요.' },
        { en: 'We discovered that we both love drawing.', ko: '우리는 둘 다 그림 그리기를 좋아한다는 것을 알게 되었어요.' },
        { en: 'By lunchtime, we had become good friends.', ko: '점심시간쯤엔, 우리는 좋은 친구가 되어 있었어요.' },
      ],
      vocab: [
        { word: 'join', ko: '합류하다' },
        { word: 'nervous', ko: '긴장한' },
        { word: 'conversation', ko: '대화' },
        { word: 'discover', ko: '알아내다, 발견하다' },
        { word: 'draw', ko: '그리다' },
        { word: 'lunchtime', ko: '점심시간' },
      ],
    },
    {
      id: 'g5_04', title: 'The Science Project', titleKo: '과학 프로젝트',
      sentences: [
        { en: 'Our teacher gave us a special science project.', ko: '선생님이 우리에게 특별한 과학 프로젝트를 주셨어요.' },
        { en: 'We had to grow plants under different conditions.', ko: '우리는 다른 조건에서 식물을 길러야 했어요.' },
        { en: 'One plant received sunlight, and another stayed in the dark.', ko: '한 식물은 햇빛을 받았고, 다른 식물은 어둠 속에 있었어요.' },
        { en: 'After two weeks, we compared the results carefully.', ko: '2주 후, 우리는 결과를 신중하게 비교했어요.' },
        { en: 'The plant in the dark grew weak and pale.', ko: '어둠 속의 식물은 약하고 창백하게 자랐어요.' },
        { en: 'We learned how important sunlight is for plants.', ko: '우리는 햇빛이 식물에게 얼마나 중요한지 배웠어요.' },
      ],
      vocab: [
        { word: 'condition', ko: '조건' },
        { word: 'sunlight', ko: '햇빛' },
        { word: 'compare', ko: '비교하다' },
        { word: 'result', ko: '결과' },
        { word: 'weak', ko: '약한' },
        { word: 'important', ko: '중요한' },
      ],
    },
    {
      id: 'g5_05', title: 'Volunteering at the Shelter', titleKo: '보호소 봉사활동',
      sentences: [
        { en: 'Last Saturday, I volunteered at an animal shelter.', ko: '지난 토요일, 나는 동물 보호소에서 봉사활동을 했어요.' },
        { en: 'There were many dogs waiting for a new home.', ko: '새로운 집을 기다리는 강아지들이 많았어요.' },
        { en: 'I helped feed them and clean their cages.', ko: '나는 그들에게 밥을 주고 우리를 청소하는 것을 도왔어요.' },
        { en: 'One little dog kept following me around.', ko: '한 작은 강아지가 계속 나를 따라다녔어요.' },
        { en: 'Its eyes seemed to ask for love and care.', ko: '그 눈은 사랑과 관심을 구하는 것 같았어요.' },
        { en: 'I hope it finds a warm family soon.', ko: '나는 그 강아지가 곧 따뜻한 가족을 찾기를 바라요.' },
      ],
      vocab: [
        { word: 'volunteer', ko: '봉사활동을 하다' },
        { word: 'shelter', ko: '보호소' },
        { word: 'feed', ko: '먹이를 주다' },
        { word: 'follow', ko: '따라가다' },
        { word: 'care', ko: '돌봄, 관심' },
        { word: 'hope', ko: '바라다' },
      ],
    },
  ],

  6: [
    {
      id: 'g6_01', title: 'The Science Fair', titleKo: '과학의 날',
      sentences: [
        { en: 'Every year, our school holds a science fair in the fall.', ko: '매년, 우리 학교는 가을에 과학의 날을 열어요.' },
        { en: 'This year, I decided to build a small robot.', ko: '올해, 나는 작은 로봇을 만들기로 결정했어요.' },
        { en: 'I spent weeks researching and testing different designs.', ko: '나는 여러 설계를 조사하고 시험하는 데 몇 주를 보냈어요.' },
        { en: 'At first, the robot kept falling over and failing.', ko: '처음에는, 로봇이 계속 넘어지고 실패했어요.' },
        { en: 'I did not give up and kept improving it.', ko: '나는 포기하지 않고 계속 그것을 개선했어요.' },
        { en: 'On the day of the fair, it finally worked perfectly.', ko: '과학의 날에, 그것은 마침내 완벽하게 작동했어요.' },
        { en: 'I felt proud of my hard work.', ko: '나는 내 노력이 자랑스러웠어요.' },
      ],
      vocab: [
        { word: 'research', ko: '조사하다' },
        { word: 'design', ko: '설계, 디자인' },
        { word: 'fail', ko: '실패하다' },
        { word: 'improve', ko: '개선하다' },
        { word: 'perfectly', ko: '완벽하게' },
        { word: 'proud', ko: '자랑스러운' },
      ],
    },
    {
      id: 'g6_02', title: 'A Letter to My Future Self', titleKo: '미래의 나에게 쓰는 편지',
      sentences: [
        { en: 'Our teacher asked us to write a letter to our future selves.', ko: '선생님은 우리에게 미래의 나에게 편지를 쓰라고 하셨어요.' },
        { en: 'At first, I did not know what to say.', ko: '처음에, 나는 무슨 말을 해야 할지 몰랐어요.' },
        { en: 'Then I began to think about my dreams and goals.', ko: '그러다 나는 내 꿈과 목표에 대해 생각하기 시작했어요.' },
        { en: 'I wrote about becoming a kind and brave person.', ko: '나는 친절하고 용감한 사람이 되는 것에 대해 썼어요.' },
        { en: 'I also promised to never stop learning new things.', ko: '나는 또한 새로운 것을 배우는 것을 절대 멈추지 않겠다고 약속했어요.' },
        { en: 'We will open these letters again after five years.', ko: '우리는 5년 후에 이 편지들을 다시 열어볼 거예요.' },
        { en: 'I am curious about who I will become by then.', ko: '나는 그때쯤 내가 어떤 사람이 되어 있을지 궁금해요.' },
      ],
      vocab: [
        { word: 'future', ko: '미래' },
        { word: 'goal', ko: '목표' },
        { word: 'brave', ko: '용감한' },
        { word: 'promise', ko: '약속하다' },
        { word: 'curious', ko: '궁금한' },
        { word: 'become', ko: '~이 되다' },
      ],
    },
    {
      id: 'g6_03', title: 'The Mountain Hike', titleKo: '산 등반',
      sentences: [
        { en: 'Last weekend, my father and I climbed a nearby mountain.', ko: '지난 주말, 아빠와 나는 근처 산에 올랐어요.' },
        { en: 'The trail was steep, rocky, and quite difficult.', ko: '길은 가파르고, 바위가 많고, 꽤 어려웠어요.' },
        { en: 'Halfway up, my legs felt heavy and tired.', ko: '중간쯤에서, 내 다리는 무겁고 지쳤어요.' },
        { en: 'My father encouraged me to keep going slowly.', ko: '아빠는 천천히 계속 가라고 나를 격려해 주셨어요.' },
        { en: 'When we finally reached the top, the view was breathtaking.', ko: '마침내 정상에 도착했을 때, 경치는 숨이 막힐 정도였어요.' },
        { en: 'All my tiredness disappeared in that moment.', ko: '그 순간 내 모든 피로가 사라졌어요.' },
        { en: 'It taught me that hard effort brings great rewards.', ko: '그것은 나에게 힘든 노력이 큰 보상을 가져다준다는 것을 가르쳐 주었어요.' },
      ],
      vocab: [
        { word: 'trail', ko: '길, 등산로' },
        { word: 'steep', ko: '가파른' },
        { word: 'encourage', ko: '격려하다' },
        { word: 'reach', ko: '도달하다' },
        { word: 'view', ko: '경치, 전망' },
        { word: 'effort', ko: '노력' },
      ],
    },
    {
      id: 'g6_04', title: 'The Debate Club', titleKo: '토론 동아리',
      sentences: [
        { en: 'This year, I joined the school debate club.', ko: '올해, 나는 학교 토론 동아리에 가입했어요.' },
        { en: 'Our first topic was about using smartphones at school.', ko: '우리의 첫 주제는 학교에서 스마트폰을 사용하는 것에 대한 것이었어요.' },
        { en: 'I had to argue against using phones in class.', ko: '나는 수업 중 전화 사용에 반대하는 주장을 해야 했어요.' },
        { en: 'It was hard to organize my thoughts clearly.', ko: '내 생각을 명확하게 정리하는 것이 어려웠어요.' },
        { en: 'My partner and I practiced our speech every day.', ko: '내 짝과 나는 매일 우리의 연설을 연습했어요.' },
        { en: 'During the debate, I felt nervous but confident.', ko: '토론 중에, 나는 긴장했지만 자신감이 있었어요.' },
        { en: 'In the end, our team won the debate.', ko: '결국, 우리 팀이 토론에서 이겼어요.' },
      ],
      vocab: [
        { word: 'debate', ko: '토론' },
        { word: 'topic', ko: '주제' },
        { word: 'argue', ko: '주장하다' },
        { word: 'organize', ko: '정리하다' },
        { word: 'practice', ko: '연습하다' },
        { word: 'confident', ko: '자신감 있는' },
      ],
    },
    {
      id: 'g6_05', title: 'Moving to a New City', titleKo: '새로운 도시로 이사',
      sentences: [
        { en: 'Last month, my family moved to a completely new city.', ko: '지난달, 우리 가족은 완전히 새로운 도시로 이사했어요.' },
        { en: 'I had to leave all my old friends behind.', ko: '나는 예전 친구들을 모두 두고 떠나야 했어요.' },
        { en: 'On my first day at the new school, I felt lonely.', ko: '새 학교 첫날, 나는 외로움을 느꼈어요.' },
        { en: 'A kind classmate noticed and sat beside me.', ko: '친절한 반 친구가 알아채고 내 옆에 앉았어요.' },
        { en: 'We talked about our favorite books and games.', ko: '우리는 좋아하는 책과 게임에 대해 이야기했어요.' },
        { en: 'Slowly, this new city started to feel like home.', ko: '천천히, 이 새로운 도시가 집처럼 느껴지기 시작했어요.' },
        { en: 'I realized that new beginnings are not always scary.', ko: '나는 새로운 시작이 항상 무서운 것은 아니라는 것을 깨달았어요.' },
      ],
      vocab: [
        { word: 'completely', ko: '완전히' },
        { word: 'lonely', ko: '외로운' },
        { word: 'notice', ko: '알아차리다' },
        { word: 'classmate', ko: '반 친구' },
        { word: 'slowly', ko: '천천히' },
        { word: 'realize', ko: '깨닫다' },
      ],
    },
  ],
};
