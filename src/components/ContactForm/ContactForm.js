
// export const ContactForm = () => {
//     return (
//         <Box sx={{ marginTop: 8, padding: 4, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
//             <Typography variant="h4" align="center" gutterBottom>
//                 Contează-ne 
//             </Typography>
//             <Typography variant="body1" align="center" gutterBottom>
//                 Have questions or need more information? Send us a message below!
//             </Typography>
//             <Box
//                 component="form"
//                 onSubmit={handleSubmit}
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: 2,
//                     maxWidth: 600,
//                     margin: '0 auto',
//                 }}
//             >
//                 <TextField
//                     fullWidth
//                     label="Name"
//                     name="name"
//                     value={formValues.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 <TextField
//                     fullWidth
//                     label="Email"
//                     type="email"
//                     name="email"
//                     value={formValues.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <TextField
//                     fullWidth
//                     label="Message"
//                     name="message"
//                     value={formValues.message}
//                     onChange={handleChange}
//                     multiline
//                     rows={4}
//                     required
//                 />
//                 <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'center' }}>
//                     Send Message
//                 </Button>
//             </Box>
//         </Box>
//     )
// }