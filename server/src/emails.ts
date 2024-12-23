import nodemailer from 'nodemailer';

export const sendSuspendedEmail = async (email: string) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp-auth.fau.de',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER_FAU,
          pass: process.env.EMAIL_PASS_FAU,
        },
      });

      const mailOptions = {
        from: '"Mini-Meco" <shu-man.cheng@fau.de>',
        to: email,
        subject: 'Account Suspended',
        text: `Your account has been suspended. Please contact the administrator for more information.`,
      };
    
      try {
        // @todo: Uncomment the following lines to send email
        // const info = await transporter.sendMail(mailOptions);
        // console.log('Account suspended email sent: %s', info.messageId);
      } catch (error) {
        console.error('error sending suspended email:', error);
        throw new Error('There was an error sending the email');
      }
}

export const sendRemovedEmail = async (email: string) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp-auth.fau.de',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER_FAU,
          pass: process.env.EMAIL_PASS_FAU,
        },
      });

      const mailOptions = {
        from: '"Mini-Meco" <shu-man.cheng@fau.de>',
        to: email,
        subject: 'Account Removed',
        text: `Your account has been removed. Please contact the administrator for more information.`,
      };
    
      try {
        // @todo: Uncomment the following lines to send email
        // const info = await transporter.sendMail(mailOptions);
        // console.log('Account removed email sent: %s', info.messageId);
      } catch (error) {
        console.error('error sending removed email:', error);
        throw new Error('There was an error sending the email');
      }
}
