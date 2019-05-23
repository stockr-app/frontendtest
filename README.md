# frontendtest


***GIT WORKFLOW***

STEP 1 - Git status (make sure you are currently on the DEVELOPMENT branch). 

STEP 2 - If your current branch is not development: git checkout development

STEP 3 - Copy the name of the Trello ticket you are working. 

STEP 4 - Create a branch with the name of that Trello ticket. (Example: git checkout -b Stockr gitflow readme)

STEP 5 - Run git status to make sure you are on your newly created branch.

Step 6 - Git add * (to add all changed files)

Step 7 - Git commit -m "(Enter your commit message)"

Step 8 -  Git push (may have to use: git push --set-upstream origin "your branch name")

Step 9 - Making a pull request: On github.com go to https://github.com/stockr-app/frontend/branches or https://github.com/stockr-app/backend/branches and look for the branch you just created and pushed to. 

Step 10 - On the right hand side click the button that says "New Pull Request"

Step 11 - Set base to development and compare to "your branch name" (should already be set).

Step 12 - Select two reviewers from the right (click on gear icon to select reviewers).

Step 13 - Leave comment if necessary and click "create pull request". 