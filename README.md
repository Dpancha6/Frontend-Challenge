# Instructions

Welcome to Ramp's front-end interview challenge.
Here is the Solution: https://dpancha6.github.io/Frontend-Challenge/

In this challenge, you will need to fix certain bugs within the starter code provided to you.

#### Typescript

At Ramp, we use React + Typescript in our codebase.

#### Solution

- Solutions can be HTML, CSS, or Javascript-oriented, depending on the bug and your solution.
- Modify any file inside the `src` folder as long as the expected result is correct.
- The goal is to solve the bug as expected. Finding a clean and efficient solution is nice to have, but not required.
- Except for the last one, the first bugs don't depend on each other and can be solved in any order.
  - We recommend reading all the descriptions first. You might find the solution to one bug while trying to fix another.
  - The last bug will need other bugs to be fixed first to be reproduced.
- You cannot add any external dependency to the project. The bugs can be solved with vanilla HTML, CSS, and Javascript.

---

# Bug 1: Select dropdown doesn't scroll with the rest of the page

**How to reproduce:**

1. Make your viewport smaller in height. Small enough to have a scroll bar
2. Click on the **Filter by employee** select to open the options dropdown
3. Scroll down the page

**Expected:** Options dropdown moves with its parent input as you scroll the page

**Actual:** Options dropdown stays in the same position as you scroll the page, losing the reference to the select input

# Bug 2: Approve checkbox not working

**How to reproduce:**

1. Click on the checkbox on the right of any transaction

**Expected:** Clicking the checkbox toggles its value

**Actual:** Nothing happens

# Bug 3: Cannot select _All Employees_ after selecting an employee

**How to reproduce:**

1. Click on the **Filter by employee** select to open the options dropdown
2. Select an employee from the list
3. Click on the **Filter by employee** select to open the options dropdown
4. Select **All Employees** option

**Expected:** All transactions are loaded

**Actual:** The page crashes

# Bug 4: Clicking on View More button not showing correct data

**How to reproduce:**

1. Click on the **View more** button
2. Wait until the new data loads

**Expected:** Initial transactions plus new transactions are shown on the page

**Actual:** New transactions replace initial transactions, losing initial transactions

# Bug 5: Employees filter not available during loading more data

_This bug has 2 wrong behaviors that will be fixed with the same solution_

##### Part 1

**How to reproduce:**

1. Open devtools to watch the simulated network requests in the console
2. Refresh the page
3. Quickly click on the **Filter by employee** select to open the options dropdown

**Expected:** The filter should stop showing "Loading employees.." as soon as the request for `employees` is succeeded

**Actual:** The filter stops showing "Loading employees.." until `paginatedTransactions` is succeeded

##### Part 2

**How to reproduce:**

1. Open devtools to watch the simulated network requests in the console
2. Click on **View more** button
3. Quickly click on the **Filter by employee** select to open the options dropdown

**Expected:** The employees filter should not show "Loading employees..." after clicking **View more**, as employees are already loaded

**Actual:** The employees filter shows "Loading employees..." after clicking **View more** until new transactions are loaded.

# Bug 6: View more button not working as expected

_This bug has 2 wrong behaviors that can be fixed with the same solution. It's acceptable to fix with separate solutions as well._

##### Part 1

**How to reproduce:**

1. Click on the **Filter by employee** select to open the options dropdown
2. Select an employee from the list
3. Wait until transactions load

**Expected:** The **View more** button is not be visible when transactions are filtered by user, because that is not a paginated request.

**Actual:** The **View more** button is visible even when transactions are filtered by employee. _You can even click **View more** button and get an unexpected result_

##### Part 2

**How to reproduce:**

1. Click on **View more** button
2. Wait until it loads more data
3. Repeat these steps as many times as you can

**Expected:** When you reach the end of the data, the **View More** button disappears and you are not able to request more data.

**Actual:** When you reach the end of the data, the **View More** button is still showing and you are still able to click the button. If you click it, the page crashes.

# Bug 7: Approving a transaction won't persist the new value

_You need to fix some of the previous bugs in order to reproduce_

**How to reproduce:**

1. Click on the **Filter by employee** select to open the options dropdown
2. Select an employee from the list _(E.g. James Smith)_
3. Toggle the first transaction _(E.g. Uncheck Social Media Ads Inc)_
4. Click on the **Filter by employee** select to open the options dropdown
5. Select **All Employees** option
6. Verify values
7. Click on the **Filter by employee** select to open the options dropdown
8. Verify values

**Expected:** In steps 6 and 8, toggled transaction kept the same value it was given in step 2 _(E.g. Social Media Ads Inc is unchecked)_

**Actual:** In steps 6 and 8, toggled transaction lost the value given in step 2. _(E.g. Social Media Ads Inc is checked again)_
