var redis = require("redis"),
client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_SERVER, {auth_pass: process.env.REDIS_PASS});

modules.export = client;
