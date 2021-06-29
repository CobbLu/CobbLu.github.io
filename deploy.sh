npm run build

cd public

git config --global user.name bad_morty
git config --email user.email xxx@xxx.com

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:CobbLu/CobbLu.github.io.git master

cd ../
rm -rf public