# Wuber

## Run Mongo Daemon

Ensure you have MongoDB installed and run the Mongo daemon
<pre><code>
$ mongod
</code></pre>

## Install Dependencies

In a separate command line window/tab, from the root directory:
<pre><code>
$ npm install
</code></pre>

## Seed Data

From the root directory:
<pre><code>
$ node seeder.js
</code></pre>

## Run Webpack and Start Server

<pre><code>
$ npm run build
$ node server/server.js
</code></pre>

Visit the site at localhost:3000