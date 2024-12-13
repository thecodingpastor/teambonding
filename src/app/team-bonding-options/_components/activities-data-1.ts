import { Indoor, Outdoor, Wellness, Custom, SportEvents } from "@/assets";

export const ActivitiesData = [
  {
    name: "Outdoor Adventures",
    link: "outdoor",
    image: Outdoor,
    intro:
      " Outdoor Adventures such as scavenger hunt, outdoor challenges and hiking offer a dynamic and engaging way for teams to bond and develop key skills. These activities are ideal for teams of varying sizes, with recommended group sizes typically ranging from 2 to 20 members depending on the specific activity.",
    lead: "Activities: Scavenger (Treasure) Hunt, Outdoor Challenges and Hiking.",
    activities: [
      {
        name: "Scavenger Hunt",
        url: "scavenger-hunt",
        img: "/images/scavenger_hunt.webp",
        intro:
          "Scavenger (treasure) hunts are a fantastic way to foster teamwork, problem-solving, and creativity while having fun. ",
      },
      {
        name: "Outdoor Challenges",
        url: "outdoor-challenge",
        img: "/images/outdoor_challenge.webp",
        intro:
          "Outdoor challenges offer a unique and effective way to strengthen team dynamics and boost overall performance.",
      },
      {
        name: "Hiking",
        url: "hiking",
        img: "/images/hiking.webp",
        intro:
          "Hiking offers a multitude of benefits for both physical and mental well-being.",
      },
    ],
    teamSize: [
      "• Scavenger (Treasure) Hunt: Suitable for groups of 2-10 members.",
      "• Outdoor Challenges: Suitable for groups of 5-20 members.",
      "• Hiking: Suitable for groups of 4-20 members.",
    ],
    time: [
      "• Scavenger (Treasure) Hunt: Typically 1 - 2 hours.",
      "• Outdoor Challenges: Typically ranges from 2-4 hours, including breaks and debriefing sessions.",
      "• Hiking: Can range from 2 - 6 hours, depending on the trail and difficulty.",
    ],
    benefits: [
      {
        topic: "Scavenger (Treasure) Hunt",
        intro:
          "Scavenger hunts are a fantastic way to foster teamwork, problem-solving, and creativity while having fun. Here are some key benefits",
        list: [
          {
            lead: "Team Building",
            children: [
              "• Enhances communication: Teams must work together to decipher clues, share information, and coordinate their efforts.",
              "• Fosters collaboration: Successful completion of the hunt requires cooperation and shared problem-solving.",
              "• Builds trust: Relying on teammates to contribute their skills and ideas strengthens trust within the group.",
            ],
          },
          {
            lead: "Problem-Solving and Creativity",
            children: [
              "• Stimulates critical thinking: Decoding clues and finding solutions requires analytical skills and out-of-the-box thinking.",
              "• Improves decision-making: Teams must weigh options, prioritize tasks, and make quick decisions under pressure.",
              "• Encourages innovation: Creative approaches to solving challenges can lead to unexpected and rewarding outcomes.",
            ],
          },
          {
            lead: "Fun and Engagement",
            children: [
              "• Boosts morale: Scavenger hunts are a fun and engaging way to break the monotony of routine work.",
              "• Reduces stress: Laughter and friendly competition can help alleviate stress and improve overall well-being.",
              "• Creates lasting memories: Shared experiences during the hunt can strengthen team bonds and create positive memories.",
            ],
          },
          {
            lead: "Other Benefits",
            children: [
              "• Increases physical activity: Scavenger hunts often involve walking or running, promoting a healthy lifestyle.",
              "• Enhances observation skills: Participants need to pay attention to details to find clues and complete challenges.",
              "• Improves time management: Effective use of time is crucial for successful completion of the hunt.",
            ],
          },
        ],
      },
      {
        topic: "Outdoor Challenges",
        intro:
          "Outdoor challenges offer a unique and effective way to strengthen team dynamics and boost overall performance. Here are some key benefits",
        list: [
          {
            lead: "Improved Communication and Collaboration",
            children: [
              "• Open dialogue: The shared experience of overcoming challenges fosters open communication.",
              "• Active listening: Team members must effectively communicate and listen to each other to succeed.",
              "• Shared goals: Working towards a common objective strengthens team unity.",
            ],
          },
          {
            lead: "Enhanced Problem-Solving and Creativity",
            children: [
              "• Adaptability: Outdoor challenges often require quick thinking and creative solutions.",
              "• Critical thinking: Analyzing situations and finding effective strategies becomes crucial.",
              "• Innovation: Team members are encouraged to think outside the box.",
            ],
          },
          {
            lead: "Increased Trust and Teamwork",
            children: [
              "• Dependency: Relying on teammates builds trust and interdependence.",
              "• Support: Encouraging and supporting each other strengthens team bonds.",
              "• Shared successes: Overcoming challenges together boosts team morale.",
            ],
          },
          {
            lead: "Boosted Morale and Employee Engagement",
            children: [
              "• Stress relief: Physical activity and time in nature reduce stress levels.",
              "• Fun and enjoyment: Shared experiences create positive memories and boost morale.",
              "• Increased motivation: Feeling valued and part of a team enhances engagement.",
            ],
          },
          {
            lead: "Improved Leadership and Followership",
            children: [
              "• Emergent leaders: Natural leaders emerge and demonstrate their abilities.",
              "• Effective followership: Team members learn to follow directions and support leaders.",
              "• Shared responsibility: Leadership is distributed among team members.",
            ],
          },
          {
            lead: "Personal Growth and Development",
            children: [
              "• Confidence building: Overcoming challenges increases self-belief.",
              "• Resilience: Learning to adapt to changing circumstances builds resilience.",
              "• Self-awareness: Understanding personal strengths and weaknesses promotes growth.",
            ],
          },
        ],
      },
      {
        topic: "Hiking",
        intro:
          "Hiking offers a multitude of benefits for both physical and mental well-being. Here are some of the key advantages",
        list: [
          {
            lead: "Physical Benefits",
            children: [
              "• Improved cardiovascular health: Hiking elevates heart rate and strengthens the heart muscle.",
              "• Increased muscle strength and endurance: Hiking engages various muscle groups, building strength and stamina.",
              "• Enhanced balance and coordination: Navigating uneven terrain improves balance and coordination.",
              "• Weight management: Hiking burns calories and helps maintain a healthy weight.",
              "• Stronger bones: Weight-bearing activity like hiking helps build bone density.",
              "• Vitamin D absorption: Sunlight exposure during hikes promotes vitamin D production.",
            ],
          },
          {
            lead: "Mental Benefits",
            children: [
              "• Reduced stress and anxiety: Spending time in nature has a calming effect on the mind.",
              "• Improved mood and happiness: Hiking releases endorphins, which boost mood.",
              "• Increased creativity and focus: Immersing oneself in nature can stimulate creativity and improve concentration.",
              "• Better sleep: Physical activity and exposure to natural light can enhance sleep quality.",
              "• Boosted self-esteem: Overcoming hiking challenges can increase self-confidence.",
            ],
          },
          {
            lead: "Other Benefits",
            children: [
              "• Connection with nature: Hiking allows for a deeper appreciation of the natural world.",
              "• Social interaction: Hiking with friends or family fosters bonding and shared experiences.",
              "• Exploration and adventure: Hiking offers opportunities to discover new places and challenge oneself.",
            ],
          },
          {
            lead: "Boosted Morale and Employee Engagement",
            children: [
              "• Stress relief: Physical activity and time in nature reduce stress levels.",
              "• Fun and enjoyment: Shared experiences create positive memories and boost morale.",
              "• Increased motivation: Feeling valued and part of a team enhances engagement.",
            ],
          },
          {
            lead: "Improved Leadership and Followership",
            children: [
              "• Emergent leaders: Natural leaders emerge and demonstrate their abilities.",
              "• Effective followership: Team members learn to follow directions and support leaders.",
              "• Shared responsibility: Leadership is distributed among team members.",
            ],
          },
          {
            lead: "Personal Growth and Development",
            children: [
              "• Confidence building: Overcoming challenges increases self-belief.",
              "• Resilience: Learning to adapt to changing circumstances builds resilience.",
              "• Self-awareness: Understanding personal strengths and weaknesses promotes growth.",
            ],
          },
        ],
      },
    ],
    requirements: [
      {
        lead: "Scavenger (Treasure) Hunt",
        list: [
          "• Fitness Level: Moderate to high physical fitness.",
          "• Clothing: Comfortable, weather-appropriate attire and sturdy footwear.",
          "• Safety Gear: Depending on the activity, may include helmets, gloves, etc.",
          "• Preparation: Basic understanding of map reading or deduction reasoning and teamwork principles.",
        ],
      },
      {
        lead: "Outdoor Challenges",
        list: [
          "• Fitness Level: Varies by challenge but generally moderate fitness.",
          "• Clothing: Comfortable, weather-appropriate attire and durable shoes (For activities like cooking or art workshops, consider wearing clothes that can get dirty).",
          "• Safety Gear: Specific to the challenges, such as harnesses for climbing.",
          "• Preparation: Willingness to participate actively and support teammates.",
        ],
      },
      {
        lead: "Hiking",
        list: [
          "• Fitness Level: Moderate physical fitness.",
          "• Clothing: Hiking boots, comfortable clothing, and weather-appropriate gear.",
          "• Equipment: Water bottles, snacks, first aid kit, and navigation tools.",
          "• Preparation: Knowledge of the hiking trail and emergency procedures.",
        ],
      },
    ],
  },
  {
    name: "Indoor Activities/Games",
    link: "indoor",
    image: Indoor,
    intro:
      "Indoor activities offer a controlled environment for team building, perfect for various weather conditions or space constraints. These activities are ideal for teams of varying sizes, with recommended group sizes typically ranging from 4 to 20 members depending on the specific activity.",
    lead: "Activities: Puzzle Challenges, Cohesion Games, and Balance Games.",
    teamSize: [
      "• Puzzle Challenges: Suitable for groups of 2-20 members.",
      "• Cohesion Games: Suitable for groups of 2-20 members.",
      "• Balance Games: Suitable for groups of 2-20 members.",
    ],
    time: [
      "• Puzzle Challenges: Typically 1 - 3 hours.",
      "• Cohesion Games: Typically 1 - 3 hours.",
      "• Balance Games: Typically 1 - 3 hours.",
    ],
    benefits: [
      {
        topic: "Puzzle Games",
        intro:
          "Puzzle games are excellent tools for fostering teamwork and collaboration. Here's how",
        list: [
          {
            lead: "Enhanced Communication and Collaboration",
            children: [
              "• Shared Goal: Working towards a common objective, like completing a puzzle, encourages open communication and cooperation.",
              "• Diverse Perspectives: Different team members bring unique problem-solving approaches, fostering a rich exchange of ideas.",
            ],
          },
          {
            lead: "Improved Problem-Solving Skills",
            children: [
              "• Critical Thinking: Puzzles require analytical thinking and the ability to break down complex problems into smaller, manageable parts.",
              "• Creative Solutions: Finding the right pieces and fitting them together often involves creative thinking and out-of-the-box approaches.",
            ],
          },
          {
            lead: "Increased Teamwork and Cooperation",
            children: [
              "• Interdependence: Team members rely on each other's input and contributions to complete the puzzle.",
              "• Shared Success: Successfully completing a puzzle together boosts morale and a sense of accomplishment.",
            ],
          },
          {
            lead: "Building Trust and Relationships",
            children: [
              "• Shared Experience: Working on a puzzle together creates a shared experience that can strengthen bonds.",
              "• Mutual Support: Encouraging and supporting teammates during the process fosters trust and respect.",
            ],
          },
          {
            lead: "Stress Reduction and Fun",
            children: [
              "• Relaxation: Engaging in a puzzle can be a fun and relaxing activity, reducing stress levels.",
              "• Team Bonding: Laughter and friendly competition can create a positive and enjoyable atmosphere.",
            ],
          },
        ],
      },
      {
        topic: "Cohesion Games",
        intro:
          "These are generally simple yet effective team-building activities that strengthen relationships and create a positive and collaborative atmosphere. Here are some key benefits",
        list: [
          {
            lead: "Communication and Coordination",
            children: [
              "• Improved communication: Team members must listen attentively and respond promptly to their cues.",
              "• Enhanced coordination: Everyone needs to work together synchronously to form the correct sentence.",
              "• Clear roles and responsibilities: Each person has a specific letter, emphasizing the importance of individual contributions.",
            ],
          },
          {
            lead: "Teamwork and Collaboration",
            children: [
              "• Shared goal: The team has a common objective - to successfully type out the sentence.",
              "• Interdependence: Everyone's role is crucial for the team's success.",
              "• Problem-solving: If mistakes occur, the team must work together to rectify them.",
            ],
          },
          {
            lead: "Fun and Engagement",
            children: [
              "• Lighthearted atmosphere: The activity is often humorous, creating a relaxed environment.",
              "• Increased morale: Shared laughter and success can boost team spirit.",
              "• Stress relief: A fun and engaging activity can help reduce stress.",
            ],
          },
          {
            lead: "Building Trust",
            children: [
              "• Dependency on teammates: Relying on others to complete the task can foster trust.",
              "• Vulnerability: Participants may feel a sense of vulnerability, which can lead to deeper connections.",
            ],
          },
        ],
      },
      {
        topic: "Balance Games",
        intro:
          "Balance games are a fantastic addition to team bonding activities. They offer a unique blend of physical and mental challenges that can significantly enhance team dynamics. Here are some key benefits:",
        list: [
          {
            lead: "Boosted Morale and Camaraderie",
            children: [
              "• Fun and engagement: Balance games are often entertaining, creating a positive and enjoyable atmosphere.",
              "• Shared experiences: Overcoming challenges together strengthens bonds and creates lasting memories.",
            ],
          },
          {
            lead: "Development of Leadership and Followership",
            children: [
              "• Emergent leaders: Balance games can reveal natural leaders who can guide the team.",
              "• Effective followership: Team members learn to follow instructions and support their team.",
            ],
          },
        ],
      },
    ],
    requirements: [
      {
        lead: "Puzzle Challenges",
        list: [
          "• Fitness Level: Minimal to moderate physical fitness.",
          "• Clothing: Comfortable clothing that allows for easy movement.",
          "• Safety Gear: Generally not required as most indoor activities do not necessitate safety gear. However basic safety measures like avoiding rough play or pushing should always be observed.",
          "• Preparation:Willingness to participate actively and support teammates.",
        ],
      },
      {
        lead: "Cohesion Games",
        list: [
          "• Fitness Level: Minimal physical exertion.",
          "• Clothing: Comfortable clothing that allows for easy movement.",
          "• Safety Gear: Generally not required as most indoor activities do not necessitate safety gear. However basic safety measures like avoiding rough play or pushing should always be observed.",
          "• Preparation: Willingness to participate actively and support teammates.",
        ],
      },
      {
        lead: "Balance Games",
        list: [
          "• Fitness Level: Minimal physical exertion.",
          "• Clothing: Comfortable clothing that allows for easy movement.",
          "• Safety Gear: Generally not required as most indoor activities do not necessitate safety gear. However basic safety measures like avoiding rough play or pushing should always be observed.",
          "• Preparation: Willingness to participate actively and support teammates.",
        ],
      },
    ],
  },
  {
    name: "Sport Events",
    link: "sport-events",
    image: SportEvents,
    intro:
      "Sports games provide an ideal platform for team building, offering an energetic and dynamic environment to foster camaraderie and collaboration. These activities can accommodate a wide range of group sizes, with optimal team numbers often ranging from 4 to 20 participants, depending on the specific sport or game chosen.",
    lead: "Activities: Obstacle Course, Relay Races, and Traditional Sports",
    teamSize: [
      "• Obstacle Course: Suitable for groups of 5-20 members.",
      "• Relay Races: Suitable for groups of 10-30 members.",
      "• Traditional Sports: Suitable for groups of 5-20 members.",
    ],
    time: [
      "• Obstacle Course: Typically 1 - 4 hours.",
      "• Relay Races: Typically 1 - 3 hours.",
      "• Traditional Sports: Typically 1 - 3 hours.",
    ],
    benefits: [
      {
        topic: "Obstacle Course",
        intro:
          "Obstacle courses are more than just physical challenges; they offer a multitude of benefits for team bonding",
        list: [
          {
            lead: "Building Teamwork and Collaboration",
            children: [
              "• Shared Goals: Teams work together to overcome obstacles, fostering a sense of unity and shared purpose.",
              "• Communication: Effective communication is crucial for coordinating efforts and providing support.",
              "• Dependency: Relying on teammates for success builds trust and interdependence.",
            ],
          },
          {
            lead: "Enhancing Problem-Solving and Critical Thinking",
            children: [
              "•Strategy Development: Collaborating to develop effective strategies for tackling obstacles.",
              "• Decision Making: Teams must make quick decisions under pressure.",
            ],
          },
          {
            lead: "Boosting Morale and Engagement",
            children: [
              "• Fun and Excitement: Overcoming challenges together creates a positive and energetic atmosphere.",
              "• Stress Relief: Physical activity helps reduce stress and improve overall well-being.",
              "• Increased Motivation: Shared achievements boost team morale and motivation.",
            ],
          },
          {
            lead: "Developing Leadership and Followership",
            children: [
              "• Emergent Leaders: Natural leaders emerge to guide the team through challenges.",
              "• Role Flexibility: Team members learn to adapt to different roles as needed.",
              "• Respect for Others: Recognizing and valuing the contributions of each team member.",
            ],
          },
          {
            lead: "Improving Physical Fitness and Health",
            children: [
              "• Increased Energy Levels: Physical activity boosts energy and focus.",
              "• Improved Coordination: Overcoming physical challenges enhances coordination and balance.",
              "• Stress Reduction: Exercise helps reduce stress and improve overall well-being.",
            ],
          },
        ],
      },
      {
        topic: "Relay Races",
        intro:
          "Relay races are a classic team-building activity that offer a multitude of benefits",
        list: [
          {
            lead: "Fostering Teamwork and Collaboration",
            children: [
              "• Interdependence: Each team member's contribution is essential for success.",
              "• Communication: Clear and effective communication is crucial for smooth handoffs.",
              "• Cooperation: Teams must work together to achieve a common goal.",
            ],
          },
          {
            lead: "Building Trust and Support",
            children: [
              "• Dependency: Relying on teammates creates a sense of trust and support.",
              "• Shared Success: Celebrating team victories strengthens bonds.",
              "• Encouragement: Cheering for teammates builds camaraderie and boosts morale.",
            ],
          },
          {
            lead: "Enhancing Communication and Coordination",
            children: [
              "• Clear Instructions: Effective communication ensures smooth transitions.",
              "• Timing: Coordinating efforts and timing handoffs are crucial for success.",
              "• Synchronization: Teams learn to work together synchronously.",
            ],
          },
          {
            lead: "Boosting Morale and Engagement",
            children: [
              "• Fun and Excitement: Relay races create a lively and enjoyable atmosphere.",
              "• Healthy Competition: Friendly competition can boost team spirit.",
              "• Shared Experience: Creating lasting memories together strengthens team bonds.",
            ],
          },
          {
            lead: "Developing Leadership and Followership",
            children: [
              "• Emergent Leaders: Natural leaders may emerge to coordinate the team.",
              "• Role Flexibility: Team members may take on different roles depending on the race.",
              "• Respect for Others: Recognizing the contributions of each team member is essential.",
            ],
          },
        ],
      },
      {
        topic: "Traditional Sports",
        intro:
          "Traditional sports offer a unique blend of physical activity, competition, and camaraderie that can significantly enhance team dynamics. Here are some key benefits:",
        list: [
          {
            lead: "Building Teamwork and Collaboration",
            children: [
              "• Shared Goals: Sports require a collective effort to achieve victory.",
              "• Role Specialization: Different positions demand specific skills, fostering a sense of interdependence.",
              "• Communication: Effective communication is crucial for coordinated play.",
            ],
          },
          {
            lead: "Fostering Leadership and Followership",
            children: [
              "• Emergent Leaders: Natural leaders often emerge during gameplay.",
              "• Role Flexibility: Team members can adapt to different roles as needed.",
              "• Respect for Authority: Adherence to coaches or team captains builds respect.",
            ],
          },
          {
            lead: "Enhancing Communication and Coordination",
            children: [
              "• Clear Instructions: Effective communication is vital for strategy implementation.",
              "• Timing: Precision and timing are essential for successful plays.",
              "• Synchronization: Team members must work together seamlessly.",
            ],
          },
          {
            lead: "Boosting Morale and Engagement",
            children: [
              "• Healthy Competition: Sports create a fun and competitive environment.",
              "• Stress Relief: Physical activity helps reduce stress and improve mood.",
              "• Shared Experiences: Shared victories and challenges strengthen bonds.",
            ],
          },
          {
            lead: "Developing Problem-Solving and Decision-Making Skills",
            children: [
              "• Strategic Thinking: Players must analyze situations and make quick decisions.",
              "• Adaptability: Adjusting to changing game conditions is essential.",
              "• Creativity: Developing innovative plays can lead to success.",
            ],
          },
          {
            lead: "Improving Physical and Mental Health",
            children: [
              "• Increased Fitness: Regular physical activity improves overall health.",
              "• Reduced Stress: Exercise is a natural stress reliever.",
              "• Enhanced Focus: Physical activity can improve mental clarity.",
            ],
          },
        ],
      },
    ],
    requirements: [
      {
        lead: "Obstacle Course",
        list: [
          "• Fitness Level: Minimal to moderate physical fitness.",
          "• Clothing: Comfortable, athletic attire that allows for easy movement.",
          "• Safety Gear: Depends on the specific course. Generally, closed-toe shoes are required. Additional safety gear may be provided or required based on course elements (e.g., helmets for climbing).",
          "• Preparation: Willingness to participate actively, follow instructions, and support teammates.",
        ],
      },
      {
        lead: "Relay Races",
        list: [
          "• Fitness Level: Varies depending on the race type. Generally, a basic level of fitness is beneficial.",
          "• Clothing: Comfortable, athletic attire.",
          "• Safety Gear: Typically not required, but closed-toe shoes are recommended.",
          "• Preparation: Willingness to participate actively, listen to instructions, and cooperate with teammates.",
        ],
      },
      {
        lead: "Traditional Sports",
        list: [
          "• Fitness Level: Varies based on the sport (e.g., high for basketball, moderate for volleyball).",
          "• Clothing: Appropriate athletic attire for the chosen sport.",
          "• Safety Gear: Depends on the sport (e.g., shin guards for soccer, helmets for baseball).",
          "• Preparation: Basic understanding of the sport's rules and a willingness to participate actively.",
        ],
      },
    ],
  },
  {
    name: "Wellness Programmes",
    link: "wellness-programmes",
    image: Wellness,
    intro:
      "Wellness programmes have become important for corporate organizations, as they contribute to employee satisfaction, productivity, and overall well-being. These activities can accommodate a wide range of group sizes, with optimal team numbers often ranging from 2 to 20 participants, depending on the specific sport or game chosen.",
    lead: "Activities: Physical Wellness Activities, Mental Wellness Workshops, Nutritional Wellness Activities, Wellness Challenges",
    teamSize: [
      "• Physical Wellness Activities: Suitable for group of 5-100 members.",
      "• Mental Wellness Workshops: Suitable for group of 5-100 members.",
      "• Nutritional Wellness Activities: Suitable for group of 5-100 members.",
      "• Wellness Challenges: Suitable for group of 5-100 members.",
    ],
    time: [
      "• Physical Wellness Activities: Typically 30 minutes - 1 hour.",
      "• Mental Wellness Workshops: Typically 30 minutes - 2 hours.",
      "• Nutritional Wellness Activities: Typically 1 - 2 hours.",
      "• Wellness Challenges: Can last from 1 - 12 weeks.",
    ],
    // PENDING
    benefits: [
      {
        topic: "Obstacle Course",
        intro:
          "Obstacle courses are more than just physical challenges; they offer a multitude of benefits for team bonding",
        list: [
          {
            lead: "Building Teamwork and Collaboration",
            children: [
              "• Shared Goals: Teams work together to overcome obstacles, fostering a sense of unity and shared purpose.",
              "• Communication: Effective communication is crucial for coordinating efforts and providing support.",
              "• Dependency: Relying on teammates for success builds trust and interdependence.",
            ],
          },
          {
            lead: "Enhancing Problem-Solving and Critical Thinking",
            children: [
              "•Strategy Development: Collaborating to develop effective strategies for tackling obstacles.",
              "• Decision Making: Teams must make quick decisions under pressure.",
            ],
          },
          {
            lead: "Boosting Morale and Engagement",
            children: [
              "• Fun and Excitement: Overcoming challenges together creates a positive and energetic atmosphere.",
              "• Stress Relief: Physical activity helps reduce stress and improve overall well-being.",
              "• Increased Motivation: Shared achievements boost team morale and motivation.",
            ],
          },
          {
            lead: "Developing Leadership and Followership",
            children: [
              "• Emergent Leaders: Natural leaders emerge to guide the team through challenges.",
              "• Role Flexibility: Team members learn to adapt to different roles as needed.",
              "• Respect for Others: Recognizing and valuing the contributions of each team member.",
            ],
          },
          {
            lead: "Improving Physical Fitness and Health",
            children: [
              "• Increased Energy Levels: Physical activity boosts energy and focus.",
              "• Improved Coordination: Overcoming physical challenges enhances coordination and balance.",
              "• Stress Reduction: Exercise helps reduce stress and improve overall well-being.",
            ],
          },
        ],
      },
      {
        topic: "Relay Races",
        intro:
          "Relay races are a classic team-building activity that offer a multitude of benefits",
        list: [
          {
            lead: "Fostering Teamwork and Collaboration",
            children: [
              "• Interdependence: Each team member's contribution is essential for success.",
              "• Communication: Clear and effective communication is crucial for smooth handoffs.",
              "• Cooperation: Teams must work together to achieve a common goal.",
            ],
          },
          {
            lead: "Building Trust and Support",
            children: [
              "• Dependency: Relying on teammates creates a sense of trust and support.",
              "• Shared Success: Celebrating team victories strengthens bonds.",
              "• Encouragement: Cheering for teammates builds camaraderie and boosts morale.",
            ],
          },
          {
            lead: "Enhancing Communication and Coordination",
            children: [
              "• Clear Instructions: Effective communication ensures smooth transitions.",
              "• Timing: Coordinating efforts and timing handoffs are crucial for success.",
              "• Synchronization: Teams learn to work together synchronously.",
            ],
          },
          {
            lead: "Boosting Morale and Engagement",
            children: [
              "• Fun and Excitement: Relay races create a lively and enjoyable atmosphere.",
              "• Healthy Competition: Friendly competition can boost team spirit.",
              "• Shared Experience: Creating lasting memories together strengthens team bonds.",
            ],
          },
          {
            lead: "Developing Leadership and Followership",
            children: [
              "• Emergent Leaders: Natural leaders may emerge to coordinate the team.",
              "• Role Flexibility: Team members may take on different roles depending on the race.",
              "• Respect for Others: Recognizing the contributions of each team member is essential.",
            ],
          },
        ],
      },
      {
        topic: "Traditional Sports",
        intro:
          "Traditional sports offer a unique blend of physical activity, competition, and camaraderie that can significantly enhance team dynamics. Here are some key benefits:",
        list: [
          {
            lead: "Building Teamwork and Collaboration",
            children: [
              "• Shared Goals: Sports require a collective effort to achieve victory.",
              "• Role Specialization: Different positions demand specific skills, fostering a sense of interdependence.",
              "• Communication: Effective communication is crucial for coordinated play.",
            ],
          },
          {
            lead: "Fostering Leadership and Followership",
            children: [
              "• Emergent Leaders: Natural leaders often emerge during gameplay.",
              "• Role Flexibility: Team members can adapt to different roles as needed.",
              "• Respect for Authority: Adherence to coaches or team captains builds respect.",
            ],
          },
          {
            lead: "Enhancing Communication and Coordination",
            children: [
              "• Clear Instructions: Effective communication is vital for strategy implementation.",
              "• Timing: Precision and timing are essential for successful plays.",
              "• Synchronization: Team members must work together seamlessly.",
            ],
          },
          {
            lead: "Boosting Morale and Engagement",
            children: [
              "• Healthy Competition: Sports create a fun and competitive environment.",
              "• Stress Relief: Physical activity helps reduce stress and improve mood.",
              "• Shared Experiences: Shared victories and challenges strengthen bonds.",
            ],
          },
          {
            lead: "Developing Problem-Solving and Decision-Making Skills",
            children: [
              "• Strategic Thinking: Players must analyze situations and make quick decisions.",
              "• Adaptability: Adjusting to changing game conditions is essential.",
              "• Creativity: Developing innovative plays can lead to success.",
            ],
          },
          {
            lead: "Improving Physical and Mental Health",
            children: [
              "• Increased Fitness: Regular physical activity improves overall health.",
              "• Reduced Stress: Exercise is a natural stress reliever.",
              "• Enhanced Focus: Physical activity can improve mental clarity.",
            ],
          },
        ],
      },
    ],
    requirements: [
      {
        lead: "Physical Wellness Activities",
        list: [
          "• Fitness Level: Minimal to moderate physical fitness.",
          "• Clothing: Comfortable, athletic attire that allows for easy movement.",
          "• Safety Gear: Generally, closed-toe shoes are required. Additional safety gear may be provided or required based on activity (e.g., helmets for biking, life jackets for kayaking).",
          "• Preparation: Willingness to participate actively, follow instructions, and support teammates.",
        ],
      },
      {
        lead: "Mental Wellness Workshops",
        list: [
          "• Fitness Level: Not applicable.",
          "• Clothing: Comfortable attire.",
          "• Safety Gear: Not applicable.",
          "• Preparation: Open-mindedness, willingness to participate in group discussions, and a desire to learn new skills.",
        ],
      },
      {
        lead: "Nutritional Wellness Activities",
        list: [
          "• Fitness Level: Not applicable.",
          "• Clothing: Comfortable attire.",
          "• Safety Gear: Not applicable.",
          "• Preparation: Interest in learning about healthy eating habits and willingness to participate in group activities.",
        ],
      },
      {
        lead: "Wellness Challenges",
        list: [
          "• Fitness Level: Varies depending on the specific challenge (e.g., high for a step challenge, low for a meditation challenge).",
          "• Clothing: Comfortable attire.",
          "• Safety Gear: Not applicable, unless specified in the challenge (e.g., pedometer for step challenge).",
          "• Preparation: Willingness to participate actively, set personal goals, and support teammates.",
        ],
      },
    ],
  },
  {
    name: "Customized Packages",
    link: "customized",
    image: Custom,
    intro:
      "We can plan a mix of our four categories; Outdoor Adventures, Indoor Games, Sport Events, and Wellness Programmes",
    lead: "Activities: Scavenger (Treasure) Hunt, Outdoor Challenges and Hiking",
    teamSize: [
      "• Games and activities are suitable for groups of 2-20 members",
    ],
    time: [
      "• Time may last for as long has 30 minutes - 4 hours depending on the combination of the games and activities chosen.",
    ],
    // PENDING
    benefits: [
      {
        topic: "",
        intro: "",
        list: [
          {
            lead: "",
            children: [
              "• Fitness Level: Activities range from menial to high physical fitness.",
              "• Clothing: Usually comfortable, weather-appropriate attire and sturdy footwear. May differ depending on the activity.",
              "• Safety Gear: It will depend on the activity",
              "• Preparation: Usually mental readiness.",
            ],
          },
        ],
      },
    ],
    requirements: [
      {
        lead: "",
        list: [
          "• Fitness Level: Activities range from menial to high physical fitness.",
          "• Clothing: Usually comfortable, weather-appropriate attire and sturdy footwear. May differ depending on the activity.",
          "• Safety Gear: It will depend on the activity",
          "• Preparation: Usually mental readiness.",
        ],
      },
    ],
  },
];
