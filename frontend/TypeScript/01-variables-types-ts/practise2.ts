interface Match{
    opponent : string;
    date : string;
    score : string | null;
    isHome : boolean;
}
let matches: Match[] = [
    { opponent: "Арсенал", date: "21.08.2026", score: null, isHome: false },
    { opponent: "Ліверпуль", date: "28.08.2026", score: "2-1", isHome: true },
];