const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    const seededFruits = document.querySelectorAll(".seed");
    console.log("Seeded Fruits:", seededFruits);

    // 2. Get all seedless fruit elements
    const seedlessFruits = document.querySelectorAll(".seedless");
    console.log("Seedless Fruits:", seedlessFruits);

    // 3. Get first seedless fruit element
    const firstSeedlessFruit = document.querySelector(".seedless");
    console.log("First Seedless Fruit:", firstSeedlessFruit);

    /* Section 2 */
    // 4. Get inner span with text "you"
    const innerSpan = document.querySelector("#wrapper span");
    console.log("Inner Span with text 'you':", innerSpan);

    // 5. Get all children of element "wrapper"
    const wrapperChildren = document.getElementById("wrapper").children;
    console.log("Children of #wrapper:", wrapperChildren);

    // 6. Get all odd number list items in the list
    const oddListItems = document.querySelectorAll("ol .odd");
    console.log("Odd-numbered list items:", oddListItems);

    // 7. Get all even number list items in the list
    const evenListItems = document.querySelectorAll("ol li:nth-child(even)");
    console.log("Even-numbered list items:", evenListItems);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    const techWithoutClass = document.querySelectorAll("a:not([class])");
    console.log("Tech companies without class:", techWithoutClass);

    // 9. Get "Amazon" list element
    const amazonLink = document.querySelector("a.shopping");
    console.log("Amazon link:", amazonLink);

    // 10. Get all unicorn list elements (not the image element)
    const unicornListItems = document.querySelectorAll("ul li");
    console.log("Unicorn list items:", unicornListItems);

window.onload = select;
