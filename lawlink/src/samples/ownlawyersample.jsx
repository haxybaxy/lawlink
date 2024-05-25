const sampleLawyer = {
    username: "lawyer123",
    name: "Dr. Hans Müller",
    profilePhoto: "https://via.placeholder.com/150", // Placeholder image URL
    paymentMethod: "Kreditkarte",
    priceRange: "200€ - 400€ pro Stunde",
    location: "Berlin, Deutschland",
    reviewsPublic: true,
    recentPosts: [
        {
        title: "Neue Gesetzesänderungen im Arbeitsrecht",
        date: "23. Mai 2024"
        },
        {
        title: "Wie man eine erfolgreiche Klage einreicht",
        date: "15. Mai 2024"
        }
    ],
    recentComments: [
        {
        content: "Das ist ein sehr informativer Beitrag!",
        date: "24. Mai 2024"
        },
        {
        content: "Ich stimme diesem Punkt voll und ganz zu.",
        date: "18. Mai 2024"
        }
    ],
    inbox: [
        {
        sender: "Benutzer456",
        content: "Könnten Sie mir bitte bei meinem Fall helfen?",
        date: "22. Mai 2024"
        },
        {
        sender: "Benutzer789",
        content: "Ich habe eine Frage zu Ihrem letzten Beitrag.",
        date: "20. Mai 2024"
        }
    ]
};

export default sampleLawyer;