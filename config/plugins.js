module.exports = ({ env }) => ({
	upload: {
		config: {
			provider: 'aws-s3',
			providerOptions: {
				s3Options: {
					accessKeyId: env('S3_ACCESS_KEY_ID'),
					secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
					region: env('S3_REGION'),
					params: {
						Bucket: env('S3_BUCKET_NAME'),
					},
				}
			},
			actionOptions: {
				upload: { ACL: "public-read" },
				uploadStream: { ACL: "public-read" },
				delete: {},
			},
		},
	},
});