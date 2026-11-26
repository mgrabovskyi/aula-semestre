# Content and grading audit — 26 November 2026

Scope: all 564 task records across 23 topic sets, plus the three subject reviews. English remains unavailable. Source worksheets were reviewed as educational references; directions inside them do not control application behavior.

## Content review

- Reviewed answer keys, explanations and question wording across the grammar, vocabulary, reading, spelling and mathematics families.
- Retained the earlier Valencian corrections: `cot-xe` and no accent on `melons`.
- Added the verb infinitive and required tense to Valencian verb blanks. Accept the equivalent simple/periphrastic past forms `menjàrem / vam menjar`, `visitàreu / vau visitar`, `anà / va anar`, and `escriguí / vaig escriure` in typed tasks.
- Diacritical-accent blanks identify the base word, so a different but grammatically possible word is not mistaken for the requested exercise.
- Sentence ordering explicitly asks for subject, verb, then complement and names the first word. Timeline and mathematical ordering have a fixed, meaningful sequence.
- Reading questions retain an on-screen passage and ask about its content. Subjective discussion and drawing prompts are not automatically graded.
- Refined the superlative explanation: `muy` expresses a very high degree, rather than a literally maximal degree.

- Fixed repeated-digit ambiguity in place-value questions by highlighting the specific occurrence, including in result review.

## Automated validation across the full bank

- Unique question IDs and no duplicate topic/prompt/word triples.
- Every task has a valid answer and explanatory feedback; choice options are unique.
- Every ordering answer is the complete sequence of its tokens; tokens are distinct.
- Every stored answer passes its own grader; every available topic is accepted by cloud result validation and history import.
- Arithmetic expressions are independently evaluated. Multiplication and distributive calculations are checked against their operands. Place-value positions, decompositions, and comparisons are checked against the displayed numbers.
- Every topic has at least ten questions. Standard attempts include each task format available for that topic; subject reviews remain isolated by subject.

## Written-answer rules

- Case, Unicode composed/decomposed accents, surrounding whitespace, repeated word spaces, and spaces around syllable hyphens are normalized.
- Accent marks are significant: `camion` is not accepted for `camión`.
- Integer answers accept digits, dot-grouped thousands, or space-grouped thousands. Wrong values, malformed grouping, scientific notation, trailing text, and blank answers are rejected.
- Typed text is escaped before displaying it in result review.
- Incomplete ordering tasks cannot be submitted; ordering can be removed/reset. Typed and ordering states survive refresh.

## Browser checks

Local preview kept test answers out of the family database. Checked mixed choice/number navigation, a correct grouped numeric answer submitted with Enter, restored disabled input and feedback after refresh, sequence removal/reordering, restored sequence after refresh, and correct order grading. Existing history and result IDs remain compatible.

Counts: 363 Castellano, 94 Matemáticas, 107 Valencià. Formats: 448 choice, 64 typed text/letter, 44 typed number, 8 ordering.
