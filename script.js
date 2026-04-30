    document.addEventListener('DOMContentLoaded', function () {
      var pages = {
        home: document.getElementById('homePage'),
        rent: document.getElementById('rentPage'),
        detail: document.getElementById('detailPage'),
        roommate: document.getElementById('roommatePage'),
        roommatePost: document.getElementById('roommatePostPage'),
        roommateDetail: document.getElementById('roommateDetailPage'),
        posts: document.getElementById('postsPage'),
        postsCreate: document.getElementById('postsCreatePage'),
        postDetail: document.getElementById('postDetailPage')
      };

      var navLinks = document.querySelectorAll('[data-page-link]');
      var selects = document.querySelectorAll('.fake-select');
      var locationLabel = document.getElementById('locationLabel');
      var priceLabel = document.getElementById('priceLabel');
      var typeLabel = document.getElementById('typeLabel');
      var searchBtn = document.getElementById('searchBtn');
      var rentSearchBtn = document.getElementById('rentSearchBtn');
      var createPostBtn = document.getElementById('createPostBtn');
      var postsCreateForm = document.getElementById('postsCreateForm');
      var backFromPostsCreateBtn = document.getElementById('backFromPostsCreateBtn');
      var postsList = document.getElementById('postsList');
      var backToPostsBtn = document.getElementById('backToPostsBtn');
      var postDetailName = document.getElementById('postDetailName');
      var postDetailTitle = document.getElementById('postDetailTitle');
      var postDetailMeta = document.getElementById('postDetailMeta');
      var postDetailBody = document.getElementById('postDetailBody');
      var postCommentsList = document.getElementById('postCommentsList');
      var postSendBtn = document.getElementById('postSendBtn');
      var postReplyInput = document.getElementById('postReplyInput');
      var detailButtons = document.querySelectorAll('.detail-btn');
      var backToRentBtn = document.getElementById('backToRentBtn');
      var backToRoommateBtn = document.getElementById('backToRoommateBtn');
      var backFromRoommatePostBtn = document.getElementById('backFromRoommatePostBtn');
            var requestTourBtn = document.getElementById('requestTourBtn');
      var roommatePreferenceForm = document.getElementById('roommatePreferenceForm');
      var roommatePostForm = document.getElementById('roommatePostForm');
      var saveRoommatePreferenceBtn = document.getElementById('saveRoommatePreferenceBtn');
      var roommateResults = document.getElementById('roommateResults');
      var roommateCardsGrid = document.getElementById('roommateCardsGrid');
      var postPhotoFileInput = document.getElementById('postPhotoFile');
      var roommateDetailPhoto = document.getElementById('roommateDetailPhoto');
      var roommateDetailTable = document.getElementById('roommateDetailTable');
      var roommateDetailIntro = document.getElementById('roommateDetailIntro');
      var roommateDetailDescription = document.getElementById('roommateDetailDescription');
      var roommateDetailPhone = document.getElementById('roommateDetailPhone');
      var roommateDetailEmail = document.getElementById('roommateDetailEmail');

      var detailTitle = document.getElementById('detailTitle');
      var detailSubtitle = document.getElementById('detailSubtitle');
      var detailPrice = document.getElementById('detailPrice');
      var detailDescription = document.getElementById('detailDescription');
      var detailTags = document.getElementById('detailTags');
      var detailStatusGrid = document.getElementById('detailStatusGrid');
      var detailInfoList = document.getElementById('detailInfoList');
      var detailHomeFeatures = document.getElementById('detailHomeFeatures');
      var detailBuildingAmenities = document.getElementById('detailBuildingAmenities');
      var detailLocation = document.getElementById('detailLocation');
      var detailHeroImage = document.getElementById('detailHeroImage');
      var detailThumb1 = document.getElementById('detailThumb1');
      var detailThumb2 = document.getElementById('detailThumb2');
      var detailThumb3 = document.getElementById('detailThumb3');
      var detailThumb4 = document.getElementById('detailThumb4');
      var detailThumbs = [detailThumb1, detailThumb2, detailThumb3, detailThumb4];
      var currentListingIndex = 0;
      var currentPostIndex = 0;


      var roommateData = [
        {
          name: 'Mia Chen',
          photo: 'images/roommate-1-female.png',
          age: '21',
          sleep: 'Early sleeper',
          cleanliness: 'Very clean',
          area: 'LIC / Manhattan',
          table: [
            ['Budget', '$1,450 per month'],
            ['Accommodation for', 'For myself'],
            ['Ready to move', 'April 20'],
            ['Looking to stay', '12 months'],
            ['Gender', 'Female'],
            ['School', 'NYU']
          ],
          intro: 'I am a senior at NYU studying media and communication. I keep a calm routine during the week and usually spend evenings reading, cooking, or working on school projects. Friends describe me as steady, considerate, and easy to live with, and I like making shared spaces feel calm instead of chaotic.',
          description: 'I am looking for a bright room in LIC or Manhattan with a roommate who values cleanliness, quiet nights, and respectful shared spaces. I am easy to communicate with and like planning chores clearly. I am happiest in a home where expectations are simple, everyone cleans up after themselves, and communication stays direct but kind.',
          phone: 'Phone number: 917-555-1846',
          email: 'Email: mia.chen.rb@gmail.com'
        },
        {
          name: 'Alex Rivera',
          photo: 'images/roommate-6-nonbinary.png',
          age: '23',
          sleep: 'Night owl',
          cleanliness: 'Moderate',
          area: 'Newport / Grove St',
          table: [
            ['Budget', '$1,700 per month'],
            ['Accommodation for', 'For myself'],
            ['Ready to move', 'May 5'],
            ['Looking to stay', '6 months'],
            ['Gender', 'Female'],
            ['School', 'Parsons']
          ],
          intro: 'I am a Parsons student focused on design and visual storytelling. I enjoy a home that feels creative but still organized, and I am usually out during the day for classes or studio work. I love thoughtful spaces, but I am not high-maintenance about them, and I try to keep shared living easy for everyone.',
          description: 'I am open to Newport or Grove Street and would love to live with someone kind, communicative, and considerate about shared kitchen and living room spaces. I am flexible but appreciate a clear routine. I do best with roommates who are friendly, honest, and comfortable checking in early before little issues turn into bigger ones.',
          phone: 'Phone number: 646-555-2099',
          email: 'Email: alex.rivera.rb@gmail.com'
        },
        {
          name: 'Sophia Park',
          photo: 'images/roommate-4-male.png',
          age: '24',
          sleep: 'Early sleeper',
          cleanliness: 'Very clean',
          area: 'JSQ',
          table: [
            ['Budget', '$1,300 per month'],
            ['Accommodation for', 'For myself'],
            ['Ready to move', 'April 28'],
            ['Looking to stay', '3 months'],
            ['Gender', 'Female'],
            ['School', 'SVA']
          ],
          intro: 'I am an SVA student and spend a lot of time drawing and editing from home. I prefer a peaceful environment and usually wake up early, so I fit best with roommates who also like quiet evenings. Home is where I reset, so I really value a place that feels dependable, low-drama, and clean.',
          description: 'I am looking for a room in Journal Square with a simple, clean setup. I prefer homes without pets and I value a roommate who is dependable, respectful, and comfortable with shared household expectations. I like clear boundaries, shared responsibility, and a home where everyone can focus on work or school without too much noise.',
          phone: 'Phone number: 718-555-3118',
          email: 'Email: sophia.park.rb@gmail.com'
        },
        {
          name: 'Daniel Kim',
          photo: 'images/roommate-2-female.png',
          age: '20',
          sleep: 'Flexible',
          cleanliness: 'Moderate',
          area: 'Grove St / Harrison',
          table: [
            ['Budget', '$1,250 per month'],
            ['Accommodation for', 'For myself'],
            ['Ready to move', 'May 12'],
            ['Looking to stay', '9 months'],
            ['Gender', 'Male'],
            ['School', 'Pratt']
          ],
          intro: 'I am a Pratt student and like a home that feels friendly and relaxed. I am easygoing about shared spaces and usually split my time between school, working out, and hanging out with friends. I am social, but I also respect downtime and I am good about giving people their space.',
          description: 'I am looking around Grove Street or Harrison for a comfortable room and roommates who are open, respectful, and realistic about keeping things reasonably clean. I am good with flexible schedules. The best setup for me is one where people are warm, straightforward, and willing to keep common areas usable without making the home feel overly strict.',
          phone: 'Phone number: 551-555-4287',
          email: 'Email: daniel.kim.rb@gmail.com'
        },
        {
          name: 'Emma Johnson',
          photo: 'images/roommate-3-female.png',
          age: '22',
          sleep: 'Regular schedule',
          cleanliness: 'Clean',
          area: 'Manhattan',
          table: [
            ['Budget', '$1,950 per month'],
            ['Accommodation for', 'For myself'],
            ['Ready to move', 'May 1'],
            ['Looking to stay', '12 months'],
            ['Gender', 'Male'],
            ['School', 'Columbia']
          ],
          intro: 'I am a Columbia student and enjoy a home that feels clean, warm, and social without being chaotic. I like hosting a friend for coffee once in a while and I am comfortable sharing a calm common area. I like roommates who are independent but still open to a friendly, respectful household vibe.',
          description: 'I prefer Manhattan and I am hoping to live with someone reliable who communicates well and keeps common spaces in good shape. I appreciate a roommate who is independent but still friendly. I care a lot about consistency, mutual respect, and feeling comfortable coming home at the end of a busy day.',
          phone: 'Phone number: 212-555-6621',
          email: 'Email: emma.johnson.rb@gmail.com'
        },
        {
          name: 'Ryan Patel',
          photo: 'images/roommate-5-male.png',
          age: '25',
          sleep: 'Night owl',
          cleanliness: 'Very clean',
          area: 'Harrison',
          table: [
            ['Budget', '$1,600 per month'],
            ['Accommodation for', 'For myself'],
            ['Ready to move', 'April 25'],
            ['Looking to stay', '6 months'],
            ['Gender', 'Non-binary'],
            ['School', 'NYU']
          ],
          intro: 'I am a graduate student at NYU and I like a home that feels practical and welcoming. I cook often, keep shared areas tidy, and usually work from campus during the day before coming home to recharge. I tend to be organized, communicative, and pretty easy to coordinate with.',
          description: 'I am mainly looking in Harrison and nearby areas for a larger room. I would do best with a roommate who values cleanliness, is comfortable with a regular routine, and is easy to coordinate with. I am looking for a setup that feels stable, respectful, and simple to manage day to day.',
          phone: 'Phone number: 917-555-7740',
          email: 'Email: ryan.patel.rb@gmail.com'
        }
      ];

      var postsData = [
        {
          nickname: 'Luna Chen',
          subject: 'Any advice for spotting scam listings before visiting?',
          body: 'I am starting my apartment search for fall semester and I keep seeing listings that look too good to be true. What are the main red flags you usually check before you even schedule a tour? I am especially unsure about broker messages, deposits, and listings with very few photos.',
          comments: [
            { name: 'Mia Chen', text: 'If they push you to send money before a tour, I would stop right there. I also always reverse-search photos and compare the address on Street View.' },
            { name: 'Jay Lin', text: 'Ask for a video tour with the current date mentioned in the clip. Scammers usually avoid anything live or specific.' },
            { name: 'Emma Wong', text: 'I also check whether the rent is much lower than nearby listings. If it is way off market, I treat it as suspicious.' },
            { name: 'Noah Park', text: 'Try asking who manages the lease and whether the unit is currently occupied. Real posters usually answer clearly.' }
          ]
        },
        {
          nickname: 'Daniel Park',
          subject: 'How do you split cleaning fairly with new roommates?',
          body: 'I am moving in with two people I do not know yet, and I want to set up a clean routine early without making it awkward. Has anyone found a simple system that actually works for bathrooms, trash, and kitchen cleanup?',
          comments: [
            { name: 'Emma Johnson', text: 'A shared note with weekly tasks helps a lot. We rotate the least-fun chore every Sunday so nobody gets stuck doing the same one.' },
            { name: 'Sophie Wu', text: 'Keep it very small and specific at first. General rules like be cleaner usually fail, but exact tasks work.' },
            { name: 'Chris Lin', text: 'We made one chart for recurring chores and another rule for clean-as-you-go in the kitchen. That combo worked best.' }
          ]
        },
        {
          nickname: 'Queenie Tran',
          subject: 'Is Newport worth it if I need an easy commute to Manhattan?',
          body: 'I like how safe and organized Newport feels, but I am worried it might feel too quiet or too expensive for what it is. For anyone who has lived there, did the commute and neighborhood convenience make it worth the price?',
          comments: [
            { name: 'Liam Chen', text: 'If you care about a calmer environment, Newport is honestly very easy. It can feel less lively at night, but the PATH access is solid.' },
            { name: 'Ava Patel', text: 'I liked it for convenience, especially groceries and waterfront walks. It really depends on whether you want more energy outside your building.' },
            { name: 'Grace Yu', text: 'For me it was worth it during exam season because everything felt simpler day to day.' }
          ]
        },
        {
          nickname: 'Nina Yu',
          subject: 'What should I ask during a room tour besides rent and utilities?',
          body: 'I have my first few room tours this week and I do not want to forget anything important. Beyond rent, deposits, and utilities, what questions helped you avoid problems later with roommates or landlords?',
          comments: [
            { name: 'Alex Rivera', text: 'Ask about guest rules, noise at night, laundry access, and whether there is any known maintenance issue in the room.' },
            { name: 'Mia Brooks', text: 'I would also ask how package delivery works and whether heat or AC is controlled by the tenant or building.' },
            { name: 'Ethan Ho', text: 'Window condition, building pests, and how quickly repairs get handled are all worth asking about.' }
          ]
        },
        {
          nickname: 'Ivy Stone',
          subject: 'Best areas for a quieter student routine?',
          body: 'I am looking for a place where I can focus, sleep early, and still get to campus without a painful commute. If you prefer calm neighborhoods, which areas felt the most manageable day to day?',
          comments: [
            { name: 'Ryan Patel', text: 'Harrison felt the calmest for me, though it depends on how often you need to stay late in Manhattan.' },
            { name: 'Jasmine Lee', text: 'Some parts of JSQ are busy, but if you are a few blocks off the main area it can still be pretty practical.' },
            { name: 'Olivia Sun', text: 'LIC can be a good balance if you want convenience without too much chaos.' }
          ]
        },
        {
          nickname: 'Sophie Lin',
          subject: 'How much should I budget monthly besides rent?',
          body: 'I have a rough number for rent, but I am worried I am underestimating everything else. For students in Jersey City or near Manhattan, what monthly costs surprised you the most after moving in?',
          comments: [
            { name: 'Jason Ma', text: 'Laundry, transit, and takeout added up faster than I expected.' },
            { name: 'Ella Kim', text: 'I would build in a real cushion for moving costs and random apartment basics like storage, hangers, and kitchen stuff.' },
            { name: 'Nora Bell', text: 'Utilities are not always huge, but internet plus small household purchases can still shift your budget.' }
          ]
        },
        {
          nickname: 'Kevin Zhao',
          subject: 'Would you choose a smaller room in Manhattan or a bigger one in Jersey City?',
          body: 'I am stuck between paying more for location or getting more space across the river. I spend a lot of time on campus but also really want a comfortable room to work from home sometimes.',
          comments: [
            { name: 'Luna Chen', text: 'If you stay out a lot, Manhattan can be worth it just for time and flexibility.' },
            { name: 'Daniel Park', text: 'I would choose Jersey City if your room quality really improves. Space changes your daily mood more than people think.' },
            { name: 'Tina Wu', text: 'Try calculating commute in total weekly hours. That made the tradeoff feel much clearer for me.' }
          ]
        },
        {
          nickname: 'Ariana Fox',
          subject: 'Any tips for finding roommates who are actually compatible?',
          body: 'A lot of people say they are clean and respectful, but that can mean very different things. What questions helped you figure out whether someone was really a good fit before signing anything together?',
          comments: [
            { name: 'Ivy Stone', text: 'Ask about sleep schedule, guests, chores, and how they handle conflict. Their answers tell you a lot.' },
            { name: 'Marcus Lee', text: 'I like asking what their last roommate situation was like and what they would change. That usually gets more honest answers.' },
            { name: 'Emma Johnson', text: 'It also helps to ask for examples instead of labels. Very clean means different things to everyone.' }
          ]
        }
      ];

      var listingData = [
        {
          title: 'Columbus Circle Studio',
          subtitle: 'Manhattan • Studio',
          price: '$3200/month',
          description: 'A furnished studio near Columbus Circle with fast subway access, bright windows, and a simple layout for one student. The building has a clean lobby, elevator access, and a quieter residential feeling even though it is close to Midtown.',
          tags: ['Manhattan', 'Studio', 'Furnished'],
          status: [
            ['Layout', '615 ft² / 5 rooms / 2 beds / 2 baths'],
            ['Available', 'Available now'],
            ['Leasing Starts', '1/13/2026'],
            ['Last price change', 'No changes']
          ],
          info: ['Building: Columbus Circle Residence', 'Address area: West 58th Street, Manhattan', 'Layout: Studio / 1 Bath', 'Closest transit: 59 St-Columbus Circle', 'Best for: One student who wants an easy Manhattan commute'],
          homeFeatures: [
            ['Central air', ''],
            ['Dishwasher', ''],
            ['Hardwood floors', ''],
            ['Private outdoor space', 'Roof rights'],
            ['View', 'City, Garden, Park, Skyline'],
            ['Washer/dryer', '']
          ],
          amenities: [
            { heading: 'Services and facilities', items: ['Bike room', 'Laundry in building'] },
            { heading: 'Wellness and recreation', items: ['No info on wellness and recreation'] },
            { heading: 'Shared outdoor space', items: ['Roof deck'] }
          ],
          floorplan: 'Studio layout with one open living and sleeping area, separate bathroom, compact kitchen wall, and one main window facing the street.',
          location: 'Located in Manhattan near Columbus Circle. Close to Central Park, subway lines, grocery stores, and student-friendly daily services.',
          images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', 'images/floorplan-1.png']
        },
        {
          title: 'LIC Student-friendly 1B1B',
          subtitle: 'LIC • 1B1B',
          price: '$2900/month',
          description: 'This LIC apartment has a modern interior, one private bedroom, one bathroom, and laundry in the building. It is popular with international students because the commute to Manhattan is short and the area feels newer and more organized.',
          tags: ['LIC', '1B1B', 'Laundry'],
          status: [
            ['Layout', '710 ft² / 5 rooms / 2 beds / 2 baths'],
            ['Available', 'Available now'],
            ['Leasing Starts', '1/13/2026'],
            ['Last price change', 'No changes']
          ],
          info: ['Building: East River Tower', 'Address area: Long Island City, Queens', 'Layout: 1 Bed / 1 Bath', 'Closest transit: Court Sq / Queensboro Plaza', 'Best for: Students who want a modern building close to Manhattan'],
          homeFeatures: [
            ['Central air', ''],
            ['Dishwasher', ''],
            ['Hardwood floors', ''],
            ['Private outdoor space', 'Balcony access'],
            ['View', 'City, River, Skyline'],
            ['Washer/dryer', 'In unit']
          ],
          amenities: [
            { heading: 'Services and facilities', items: ['Bike room', 'Laundry in building'] },
            { heading: 'Wellness and recreation', items: ['Fitness room'] },
            { heading: 'Shared outdoor space', items: ['Roof deck'] }
          ],
          floorplan: 'One bedroom connected to a separate living room, full kitchen, bathroom near the entry, and storage closet by the hallway.',
          location: 'Located in Long Island City near major subway lines, supermarkets, cafes, and waterfront walking areas.',
          images: ['https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80', 'images/floorplan-2.png']
        },
        {
          title: 'Shared Room near Grove St',
          subtitle: 'Grove St • Shared',
          price: '$1450/month',
          description: 'A shared apartment near Grove Street PATH with a lower monthly price, simple furnishings, and a practical layout. It is a good option for students who want to save money and still stay close to Manhattan access.',
          tags: ['Grove St', 'Shared', 'Budget'],
          status: [
            ['Layout', '680 ft² / 5 rooms / 2 beds / 2 baths'],
            ['Available', 'Available now'],
            ['Leasing Starts', '1/13/2026'],
            ['Last price change', 'No changes']
          ],
          info: ['Building: Grove Shared House', 'Address area: Grove Street, Jersey City', 'Layout: Shared room in 3 Bed apartment', 'Closest transit: Grove St PATH', 'Best for: Students looking for a lower budget option'],
          homeFeatures: [
            ['Central air', ''],
            ['Dishwasher', ''],
            ['Hardwood floors', ''],
            ['Private outdoor space', 'Shared patio access'],
            ['View', 'City, Street'],
            ['Washer/dryer', 'In building']
          ],
          amenities: [
            { heading: 'Services and facilities', items: ['Bike room', 'Laundry in building'] },
            { heading: 'Wellness and recreation', items: ['No info on wellness and recreation'] },
            { heading: 'Shared outdoor space', items: ['Roof deck'] }
          ],
          floorplan: 'Shared bedroom connected to a common living room, shared bathroom, kitchen, and small dining area used by all roommates.',
          location: 'Located near Grove Street PATH with easy access to downtown Jersey City, restaurants, and direct trains to Manhattan.',
          images: ['https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', 'images/floorplan-3.png']
        },
        {
          title: 'Newport High-rise Apartment',
          subtitle: 'Newport • Studio',
          price: '$2750/month',
          description: 'A waterfront studio in Newport with a safer and calmer environment, full-service building entry, and many international students nearby. The area has large residential buildings and easy PATH access.',
          tags: ['Newport', 'Studio', 'Waterfront'],
          status: [
            ['Layout', '640 ft² / 5 rooms / 2 beds / 2 baths'],
            ['Available', 'Available now'],
            ['Leasing Starts', '1/13/2026'],
            ['Last price change', 'No changes']
          ],
          info: ['Building: Newport High-rise', 'Address area: Newport, Jersey City', 'Layout: Studio / 1 Bath', 'Closest transit: Newport PATH', 'Best for: Students who like a quieter residential area'],
          homeFeatures: [
            ['Central air', ''],
            ['Dishwasher', ''],
            ['Hardwood floors', ''],
            ['Private outdoor space', 'Window seating nook'],
            ['View', 'Waterfront, Skyline'],
            ['Washer/dryer', 'In building']
          ],
          amenities: [
            { heading: 'Services and facilities', items: ['Bike room', 'Laundry in building'] },
            { heading: 'Wellness and recreation', items: ['Resident lounge'] },
            { heading: 'Shared outdoor space', items: ['Roof deck'] }
          ],
          floorplan: 'Open studio with one large window wall, kitchen placed near the entrance, and bathroom beside a small storage area.',
          location: 'Located in Newport near the waterfront, shopping mall, PATH station, and large apartment towers.',
          images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80', 'images/floorplan-1.png']
        },
        {
          title: 'JSQ Shared 2B2B',
          subtitle: 'JSQ • Shared',
          price: '$1600/month',
          description: 'A shared 2B2B apartment in Journal Square with good transportation access and a lower price than many Manhattan options. It works well for students who want roommate matching and a reasonable commute.',
          tags: ['JSQ', 'Shared', '2B2B'],
          status: [
            ['Layout', '840 ft² / 5 rooms / 2 beds / 2 baths'],
            ['Available', 'Available now'],
            ['Leasing Starts', '1/13/2026'],
            ['Last price change', 'No changes']
          ],
          info: ['Building: Journal Square Commons', 'Address area: Journal Square, Jersey City', 'Layout: Shared 2 Bed / 2 Bath', 'Closest transit: Journal Square PATH', 'Best for: Roommate matching and balanced budget'],
          homeFeatures: [
            ['Central air', ''],
            ['Dishwasher', ''],
            ['Hardwood floors', ''],
            ['Private outdoor space', 'Juliet balcony'],
            ['View', 'City, Garden, Park, Skyline'],
            ['Washer/dryer', '']
          ],
          amenities: [
            { heading: 'Services and facilities', items: ['Bike room', 'Laundry in building'] },
            { heading: 'Wellness and recreation', items: ['Community room'] },
            { heading: 'Shared outdoor space', items: ['Roof deck'] }
          ],
          floorplan: 'Two bedrooms placed on opposite sides of the living room, two bathrooms, shared kitchen, and central dining area.',
          location: 'Located in Journal Square near PATH, bus routes, everyday stores, and several student rental options.',
          images: ['https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80', 'images/floorplan-2.png']
        },
        {
          title: 'Harrison New Building Unit',
          subtitle: 'Harrison • 1B1B',
          price: '$2300/month',
          description: 'A newer building in Harrison with a quieter neighborhood feeling, a private one-bedroom layout, and a calmer environment for students who do not want to live in a busy area every day.',
          tags: ['Harrison', '1B1B', 'Quiet'],
          status: [
            ['Layout', '760 ft² / 5 rooms / 2 beds / 2 baths'],
            ['Available', 'Available now'],
            ['Leasing Starts', '1/13/2026'],
            ['Last price change', 'No changes']
          ],
          info: ['Building: Harrison Green Residences', 'Address area: Harrison, New Jersey', 'Layout: 1 Bed / 1 Bath', 'Closest transit: Harrison PATH', 'Best for: Students who want quiet surroundings and a lower price than Manhattan'],
          homeFeatures: [
            ['Central air', ''],
            ['Dishwasher', ''],
            ['Hardwood floors', ''],
            ['Private outdoor space', 'Private terrace'],
            ['View', 'City, Garden'],
            ['Washer/dryer', 'In unit']
          ],
          amenities: [
            { heading: 'Services and facilities', items: ['Bike room', 'Laundry in building'] },
            { heading: 'Wellness and recreation', items: ['No info on wellness and recreation'] },
            { heading: 'Shared outdoor space', items: ['Roof deck'] }
          ],
          floorplan: 'Private bedroom next to living room, full kitchen, one bathroom, and closet space near the entrance and bedroom wall.',
          location: 'Located in Harrison near PATH, new apartment buildings, local restaurants, and a more open residential environment.',
          images: ['https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80', 'images/floorplan-3.png']
        }
      ];

      function showPage(pageName) {
        var pageKeys = Object.keys(pages);
        pageKeys.forEach(function (key) {
          var element = pages[key];
          if (element) {
            element.classList.toggle('active', key === pageName);
          }
        });

        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('data-page-link') === pageName);
        });

        document.body.classList.toggle('home-active', pageName === 'home');
      }

      function setActiveThumb(activeIndex) {
        detailThumbs.forEach(function (thumb, index) {
          if (thumb) {
            thumb.classList.toggle('active-thumb', index === activeIndex);
          }
        });
      }

      function updateHeroImageMode(imageSrc) {
        if (detailHeroImage) {
          detailHeroImage.classList.toggle('floorplan-hero', imageSrc.indexOf('floorplan-') !== -1);
        }
      }

      function switchHeroImage(imageSrc, activeIndex) {
        if (detailHeroImage) {
          detailHeroImage.src = imageSrc;
          updateHeroImageMode(imageSrc);
        }
        setActiveThumb(activeIndex);
      }


      function renderPostsList() {
        if (!postsList) {
          return;
        }

        postsList.innerHTML = postsData.map(function (post, index) {
          return '' +
            '<div class="post-row" data-post-index="' + index + '">' +
              '<div class="post-row-copy">' +
                '<div class="post-row-name">' + post.nickname + '</div>' +
                '<div class="post-row-subject">' + post.subject + '</div>' +
              '</div>' +
              '<div class="post-row-actions">' +
                '<button class="post-row-reply" data-post-index="' + index + '" type="button">Reply</button>' +
              '</div>' +
            '</div>';
        }).join('');
      }

      function renderPostComments(comments) {
        postCommentsList.innerHTML = comments.map(function (comment) {
          return '' +
            '<div class="post-comment">' +
              '<div class="post-comment-name">' + comment.name + '</div>' +
              '<div class="post-comment-text">' + comment.text + '</div>' +
            '</div>';
        }).join('');
      }

      function renderPostDetail(index) {
        var post = postsData[index];
        if (!post) {
          return;
        }

        currentPostIndex = index;
        postDetailName.textContent = post.nickname;
        postDetailTitle.textContent = post.subject;
        postDetailMeta.innerHTML = '';
        postDetailBody.textContent = post.body;
        if (postReplyInput) {
          postReplyInput.value = '';
        }
        renderPostComments(post.comments);

        showPage('postDetail');
      }

      function getRoommateDetailButtons() {
        return document.querySelectorAll('.roommate-detail-btn');
      }

      function renderRoommateCards() {
        if (!roommateCardsGrid) {
          return;
        }

        roommateCardsGrid.innerHTML = roommateData.map(function (profile, index) {
          var tableMap = {};
          profile.table.forEach(function (row) {
            tableMap[row[0]] = row[1];
          });

          return '' +
            '<article class="card roommate-card">' +
              '<div class="roommate-card-head">' +
                '<h3>' + profile.name + '</h3>' +
                '<img class="roommate-card-photo" src="' + profile.photo + '" alt="' + profile.name + ' portrait" />' +
              '</div>' +
              '<div class="roommate-profile-list">' +
                '<div><strong>Gender:</strong> ' + (tableMap['Gender'] || '') + '</div>' +
                '<div><strong>Age:</strong> ' + (profile.age || '') + '</div>' +
                '<div><strong>School:</strong> ' + (tableMap['School'] || '') + '</div>' +
                '<div><strong>Sleep:</strong> ' + (profile.sleep || '') + '</div>' +
                '<div><strong>Cleanliness:</strong> ' + (profile.cleanliness || '') + '</div>' +
                '<div><strong>Preferred Area:</strong> ' + (profile.area || '') + '</div>' +
              '</div>' +
              '<div class="button-row">' +
                '<button class="pink-btn roommate-detail-btn" data-roommate-index="' + index + '" type="button">Details</button>' +
              '</div>' +
            '</article>';
        }).join('');
      }

      function renderRoommateDetail(index) {
        var profile = roommateData[index];
        if (!profile) {
          return;
        }

        roommateDetailPhoto.src = profile.photo;
        roommateDetailPhoto.alt = profile.name + ' portrait';
        roommateDetailTable.innerHTML = '';
        var iconMap = {
          'Budget': '$',
          'Accommodation for': '⌂',
          'Ready to move': '◷',
          'Looking to stay': '⇄',
          'Gender': '☺',
          'School': '✎'
        };
        profile.table.forEach(function (row) {
          var rowEl = document.createElement('div');
          var icon = document.createElement('span');
          var stat = document.createElement('div');
          var label = document.createElement('span');
          var value = document.createElement('span');

          rowEl.className = 'roommate-detail-row';
          icon.className = 'roommate-detail-icon';
          stat.className = 'roommate-detail-stat';
          label.className = 'roommate-detail-label';
          value.className = 'roommate-detail-value';

          icon.textContent = iconMap[row[0]] || '•';
          label.textContent = row[0];
          value.textContent = row[1];

          stat.appendChild(label);
          stat.appendChild(value);
          rowEl.appendChild(icon);
          rowEl.appendChild(stat);
          roommateDetailTable.appendChild(rowEl);
        });

        roommateDetailIntro.textContent = profile.intro;
        roommateDetailDescription.textContent = profile.description;
        roommateDetailPhone.textContent = profile.phone;
        roommateDetailEmail.textContent = profile.email;

        showPage('roommateDetail');
      }

      function renderDetailPage(index) {
        var listing = listingData[index];
        if (!listing) {
          return;
        }

        currentListingIndex = index;
        detailTitle.textContent = listing.title;
        detailSubtitle.textContent = listing.subtitle;
        detailPrice.textContent = listing.price;
        detailDescription.textContent = listing.description;
        detailLocation.textContent = listing.location;

        detailHeroImage.src = listing.images[0];
        updateHeroImageMode(listing.images[0]);
        detailThumb1.src = listing.images[1];
        detailThumb2.src = listing.images[2];
        detailThumb3.src = listing.images[3];
        detailThumb4.src = listing.images[4];
        detailThumb1.alt = listing.title + ' image 1';
        detailThumb2.alt = listing.title + ' image 2';
        detailThumb3.alt = listing.title + ' image 3';
        detailThumb4.alt = listing.title + ' floor plan';
        setActiveThumb(-1);

        detailTags.innerHTML = '';
        listing.tags.forEach(function (tag) {
          var tagEl = document.createElement('span');
          tagEl.className = 'tag';
          tagEl.textContent = tag;
          detailTags.appendChild(tagEl);
        });

        if (detailStatusGrid) {
          detailStatusGrid.innerHTML = '';
          (listing.status || []).forEach(function (item) {
            var box = document.createElement('div');
            var label = document.createElement('span');
            var value = document.createElement('span');
            box.className = 'detail-status-item';
            label.className = 'detail-status-label';
            value.className = 'detail-status-value';
            label.textContent = item[0];
            value.textContent = item[1];
            box.appendChild(label);
            box.appendChild(value);
            detailStatusGrid.appendChild(box);
          });
        }

        detailInfoList.innerHTML = '';
        var detailIconMap = {
          'Building': '⌂',
          'Address area': '⌖',
          'Layout': '▣',
          'Closest transit': '⇅',
          'Best for': '★'
        };
        listing.info.forEach(function (item) {
          var parts = item.split(': ');
          var labelText = parts[0] || '';
          var valueText = parts.slice(1).join(': ') || '';
          var row = document.createElement('div');
          var icon = document.createElement('span');
          var copy = document.createElement('div');
          var label = document.createElement('span');
          var value = document.createElement('span');

          row.className = 'detail-fact';
          icon.className = 'detail-fact-icon';
          copy.className = 'detail-fact-copy';
          label.className = 'detail-fact-label';
          value.className = 'detail-fact-value';

          icon.textContent = detailIconMap[labelText] || '•';
          label.textContent = labelText;
          value.textContent = valueText;

          copy.appendChild(label);
          copy.appendChild(value);
          row.appendChild(icon);
          row.appendChild(copy);
          detailInfoList.appendChild(row);
        });

        if (detailHomeFeatures) {
          detailHomeFeatures.innerHTML = '';
          var featureIconMap = {
            'Central air': '❄',
            'Dishwasher': '◫',
            'Hardwood floors': '▤',
            'Private outdoor space': '☼',
            'View': '⌂',
            'Washer/dryer': '◌'
          };
          (listing.homeFeatures || []).forEach(function (item) {
            var feature = document.createElement('div');
            var icon = document.createElement('span');
            var copy = document.createElement('div');
            var title = document.createElement('span');
            var note = document.createElement('span');
            feature.className = 'detail-feature-item';
            icon.className = 'detail-feature-icon';
            copy.className = 'detail-feature-copy';
            title.className = 'detail-feature-title';
            note.className = 'detail-feature-note';
            icon.textContent = featureIconMap[item[0]] || '•';
            title.textContent = item[0];
            note.textContent = item[1] || '';
            copy.appendChild(title);
            if (item[1]) {
              copy.appendChild(note);
            }
            feature.appendChild(icon);
            feature.appendChild(copy);
            detailHomeFeatures.appendChild(feature);
          });
        }

        if (detailBuildingAmenities) {
          detailBuildingAmenities.innerHTML = '';
          (listing.amenities || []).forEach(function (group) {
            var wrap = document.createElement('div');
            var heading = document.createElement('div');
            var list = document.createElement('div');
            wrap.className = 'detail-amenity-group';
            heading.className = 'detail-amenity-heading';
            list.className = 'detail-amenity-list';
            heading.textContent = group.heading;
            (group.items || []).forEach(function (entry) {
              var item = document.createElement('div');
              var icon = document.createElement('span');
              var copy = document.createElement('div');
              var title = document.createElement('span');
              var amenityIconMap = {
                'Bike room': '⚲',
                'Laundry in building': '◌',
                'Fitness room': '⌘',
                'Resident lounge': '⌂',
                'Community room': '◫',
                'Roof deck': '☼',
                'No info on wellness and recreation': '—'
              };
              item.className = 'detail-feature-item';
              icon.className = 'detail-feature-icon';
              copy.className = 'detail-feature-copy';
              title.className = 'detail-feature-title';
              icon.textContent = amenityIconMap[entry] || '•';
              title.textContent = entry;
              copy.appendChild(title);
              item.appendChild(icon);
              item.appendChild(copy);
              list.appendChild(item);
            });
            wrap.appendChild(heading);
            wrap.appendChild(list);
            detailBuildingAmenities.appendChild(wrap);
          });
        }

        showPage('detail');
      }

      navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          var targetPage = link.getAttribute('data-page-link');
          if (targetPage && pages[targetPage]) {
            showPage(targetPage);
          }
        });
      });

      selects.forEach(function (select) {
        select.addEventListener('click', function (event) {
          var clickedButton = event.target.closest('.dropdown-panel button');

          selects.forEach(function (item) {
            if (item !== select) {
              item.classList.remove('open');
            }
          });

          if (!clickedButton) {
            select.classList.toggle('open');
            return;
          }

          var value = clickedButton.getAttribute('data-value');
          var type = select.getAttribute('data-type');
          var panel = clickedButton.closest('.dropdown-panel');
          if (panel) {
            panel.querySelectorAll('button').forEach(function (button) {
              button.classList.toggle('selected', button === clickedButton);
            });
          }

          // update homepage labels
          if (type === 'location' && locationLabel) {
            locationLabel.textContent = value;
          }
          if (type === 'price' && priceLabel) {
            priceLabel.textContent = value;
          }
          if (type === 'type' && typeLabel) {
            typeLabel.textContent = value;
          }

          // update CURRENT select text (for rent page & homepage fallback)
          var labelSpan = select.querySelector('span:first-child');
          if (labelSpan) {
            labelSpan.textContent = value;
          }

          select.classList.remove('open');
          event.stopPropagation();
        });
      });

      document.addEventListener('click', function (event) {
        if (!event.target.closest('.fake-select')) {
          selects.forEach(function (select) {
            select.classList.remove('open');
          });
        }
      });

      if (searchBtn) {
        searchBtn.addEventListener('click', function () {
          showPage('rent');
        });
      }

      if (rentSearchBtn) {
        rentSearchBtn.addEventListener('click', function () {
          showPage('rent');
        });
      }


      if (createPostBtn) {
        createPostBtn.addEventListener('click', function () {
          showPage('postsCreate');
        });
      }

      if (backFromPostsCreateBtn) {
        backFromPostsCreateBtn.addEventListener('click', function () {
          showPage('posts');
        });
      }

      if (postsCreateForm) {
        postsCreateForm.addEventListener('submit', function (event) {
          event.preventDefault();
          alert('Your post has been submitted.');
          postsCreateForm.reset();
          showPage('posts');
        });
      }

      if (postsList) {
        postsList.addEventListener('click', function (event) {
          var replyButton = event.target.closest('.post-row-reply');
          var index;
          if (!replyButton) {
            return;
          }
          index = Number(replyButton.getAttribute('data-post-index'));
          if (!Number.isNaN(index)) {
            renderPostDetail(index);
          }
        });
      }

      if (backToPostsBtn) {
        backToPostsBtn.addEventListener('click', function () {
          showPage('posts');
        });
      }

      if (postSendBtn) {
        postSendBtn.addEventListener('click', function () {
          var post;
          var replyText;
          if (!postReplyInput) {
            return;
          }
          replyText = postReplyInput.value.trim();
          if (!replyText) {
            return;
          }
          post = postsData[currentPostIndex];
          if (!post) {
            return;
          }
          post.comments.unshift({ name: 'You', text: replyText });
          renderPostComments(post.comments);
          postReplyInput.value = '';
        });
      }

      if (roommateCardsGrid) {
        roommateCardsGrid.addEventListener('click', function (event) {
          var button = event.target.closest('.roommate-detail-btn');
          var index;
          if (!button) {
            return;
          }
          index = Number(button.getAttribute('data-roommate-index'));
          if (!Number.isNaN(index)) {
            renderRoommateDetail(index);
          }
        });
      }

      detailButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
          renderDetailPage(index);
        });
      });

      detailThumbs.forEach(function (thumb, index) {
        if (thumb) {
          thumb.addEventListener('click', function () {
            var listing = listingData[currentListingIndex];
            if (!listing) {
              return;
            }
            var targetImage = listing.images[index + 1];
            if (targetImage) {
              switchHeroImage(targetImage, index);
            }
          });
        }
      });

      if (detailHeroImage) {
        detailHeroImage.addEventListener('click', function () {
          var listing = listingData[currentListingIndex];
          var currentImage;
          var currentIndex;
          var nextIndex;

          if (!listing) {
            return;
          }

          currentImage = detailHeroImage.src;
          currentIndex = listing.images.findIndex(function (image) {
            return currentImage.indexOf(image.split('?')[0]) !== -1;
          });

          if (currentIndex >= 0) {
            nextIndex = (currentIndex + 1) % listing.images.length;
          } else {
            nextIndex = 0;
          }

          detailHeroImage.src = listing.images[nextIndex];

          if (nextIndex === 0) {
            setActiveThumb(-1);
          } else {
            setActiveThumb(nextIndex - 1);
          }
        });
      }

      if (backToRentBtn) {
        backToRentBtn.addEventListener('click', function () {
          showPage('rent');
        });
      }

      if (backToRoommateBtn) {
        backToRoommateBtn.addEventListener('click', function () {
          showPage('roommate');
        });
      }

      if (requestTourBtn) {
        requestTourBtn.addEventListener('click', function () {
          var listing = listingData[currentListingIndex];
          var listingName = listing ? listing.title : 'this apartment';
          alert('Tour request sent for ' + listingName + '.');
        });
      }


      if (roommatePreferenceForm) {
        roommatePreferenceForm.addEventListener('submit', function (event) {
          event.preventDefault();
          if (roommateResults) {
            roommateResults.classList.add('active');
            roommateResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      }

      if (saveRoommatePreferenceBtn) {
        saveRoommatePreferenceBtn.addEventListener('click', function () {
          showPage('roommatePost');
        });
      }

      if (backFromRoommatePostBtn) {
        backFromRoommatePostBtn.addEventListener('click', function () {
          showPage('roommate');
        });
      }

      if (roommatePostForm) {
        roommatePostForm.addEventListener('submit', function (event) {
          event.preventDefault();
          alert('Your information has been submitted.');
        });
      }

      window.goRent = function () {
        showPage('rent');
      };

      renderRoommateCards();
      renderPostsList();
      showPage('home');

      console.assert(!!searchBtn, 'Test failed: #searchBtn should exist.');
      console.assert(!!rentSearchBtn, 'Test failed: #rentSearchBtn should exist.');
      console.assert(selects.length >= 3, 'Test failed: fake selects should exist.');
      console.assert(!!pages.home && !!pages.rent && !!pages.detail && !!pages.roommate && !!pages.roommatePost && !!pages.roommateDetail && !!pages.posts && !!pages.postsCreate && !!pages.postDetail, 'Test failed: home, rent, detail, roommate, roommate post, roommate detail, posts, posts create, and post detail pages should exist.');
      console.assert(detailButtons.length === 6, 'Test failed: there should be 6 detail buttons.');
      console.assert(!!backToRentBtn, 'Test failed: back button should exist on the detail page.');
      console.assert(!!requestTourBtn, 'Test failed: request tour button should exist on the detail page.');
      console.assert(Array.isArray(listingData) && listingData.length === 6, 'Test failed: listing data should contain 6 items.');
      console.assert(getComputedStyle(document.body).fontFamily.toLowerCase().indexOf('sans') !== -1 || getComputedStyle(document.body).fontFamily.toLowerCase().indexOf('arial') !== -1 || getComputedStyle(document.body).fontFamily.toLowerCase().indexOf('helvetica') !== -1, 'Test failed: body font should use sans-serif.');
      console.assert(detailThumbs.length === 4, 'Test failed: there should be 4 thumbnail images.');
      console.assert(listingData[5].images[0].indexOf('https://images.unsplash.com/') === 0, 'Test failed: Harrison hero image should have a valid Unsplash URL.');
      console.assert(listingData[5].images[1].indexOf('https://images.unsplash.com/') === 0, 'Test failed: Harrison thumbnail 1 should have a valid Unsplash URL.');
      console.assert(!!postsCreateForm, 'Test failed: posts create form should exist.');
      console.assert(!!roommatePreferenceForm, 'Test failed: roommate preference form should exist.');
      console.assert(!!saveRoommatePreferenceBtn, 'Test failed: roommate save button should exist.');
      console.assert(!!roommatePostForm, 'Test failed: roommate post form should exist.');
      console.assert(!!roommateResults, 'Test failed: roommate results should exist.');
      console.assert(!!roommateCardsGrid, 'Test failed: roommate cards grid should exist.');
      console.assert(!!roommateDetailPhoto, 'Test failed: roommate detail photo should exist.');
      console.assert(!!postsList, 'Test failed: posts list should exist.');
      console.assert(!!postDetailTitle && !!postCommentsList, 'Test failed: post detail elements should exist.');
      console.assert(Array.isArray(postsData) && postsData.length === 8, 'Test failed: posts data should contain 8 posts.');
      console.assert(getRoommateDetailButtons().length >= 6, 'Test failed: there should be at least 6 roommate detail buttons.');
      console.assert(Array.isArray(roommateData) && roommateData.length >= 6, 'Test failed: roommate data should contain at least 6 profiles.');
    });
