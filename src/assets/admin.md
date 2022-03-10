# Signing In

Sign in using the "UH Login" button on the main screen with your UH username and password.  If you have an administrative account, you will be able to access the administrative side.

## Multiple Affiliations

{help-site-select}

Many administrative users also have one or more additional affiliations in ***sece*** (i.e. Student, UH Employer, Non-UH Employer).  When you sign in, you will be taken to the site select screen to allow you to choose which site you want to access.  If you check the "Remember my selection" box, whichever site you select will become the default and you will be taken straight to that site on future logins.  You can return to the site select screen at any time using the "Switch Site" option under your User Menu (see image below), or by simply pressing the "***sece***" link at the top of the screen.

{help-admin-main}

## Attaching a Non-UH Employer Account

For convenience, you may attach one Non-UH Employer account to your UH login.  Attaching a Non-UH Employer account allows you to access the Non-UH Employer site while you are signed in with your UH username as an administrator.  You can attach your account at any time from the site select screen.  All you need is the username and password for the Non-UH Employer account that you wish to attach.

{help-admin-attach-nonuh}

Note that you can only attach one Non-UH Employer account to your UH login, so if you attach a new account while there is another account already attached, the new account will replace the old one and you will no longer be able to access it with your UH login.

## Access Levels

Every administrative user is assigned an access level based on their role.  Your access level determines which screens you can see, and which actions you can perform.  A higher number access level generally implies more restrictions on access.

* __0: MIS Staff:__ Has access to all screens and actions, and can change campus affiliation on-the-fly from the user menu.  Campus affiliation changes made from the user menu are temporary, and last only for the duration of the user's session.
* __1: SE - Systemwide Administrator:__ Can also change campus affiliation on-the-fly from the user menu.
* __2: SE - Campus Administrator__
* __3: SE - Full-time Staff__
* __4: SE - Senior Student Assistant__
* __5: SE - Student Assistant__
* __6: Payroll - Read Only Timesheet Access__
* __7: Payroll - Timesheet Administrator__

All access levels, with the exception of 0 and 1, are generally limited to viewing and modifying data specific to their own campus affiliation.  Access levels 6 and 7 can only access the Timesheets application.

# Students

The Main Students Menu displays some statistics about the number of students registered in ***sece*** and how many are enrolled in regular and extension programs.  The main screen also provides a search feature that allows you to locate specific students.  The search criteria are:

* __Campus:__ The primary campus affiliation on the student profile.  Unlike many other features, student profiles can be searched for and viewed regardless of campus affiliation. 
* __Last Name:__ The last name as it appears on the student's profile.  The last name is refreshed daily from Banner.
* __First Name:__ The first name as it appears on the student's profile.  The first name is refreshed daily from Banner. 
* __UH Number:__ The UH number that uniquely identifies a student. 
* __UH Username:__ The UH username that uniquely identifies a student.
* __Email:__ The email address as it appears on the student's profile.  All profiles should list the student's UH email address.
* __Employer / College / Division:__ For students who are actively placed, this field filters by the college/division of the placement, which is defined based on the supervisor on record.
* __Employing Department / Company Type :__ For students who are actively placed, this field filters by the department/company type of the placement, which is defined based on the supervisor on record. 

## Registering New Students

You can register a profile for a student who does not have one using the link on the Main Students Menu by entering their UH Number.  If the student is currently enrolled, their profile will be automatically populated with data from Banner, and their eligibility will be established by the system.  If not, you will be taken to the student registration form, where you must enter the student's information manually.

## Student Eligibility

When viewing a student's record from the search results, you will be taken to the Student Eligibility screen.  This screen shows information specific to your campus about the student's job eligibility, overrides, enrollment, courses, degrees, forms I-9, and staff note exceptions.  In addition, above the eligibility information, you will see subtabs to view screens with other detailed information about the student.

## Programs and Overrides

{help-overrides}

The table pictured above lists all job programs.  The "Eligible For" row indicates whether the student currently has automatic eligibility for each program at your campus.  If the student has eligibility in a program, its cell will be highlighted green and display a checkmark.  If not, the cell will be blank.

If the "Override Eligibility" box is checked, the system will ignore the student's automatic eligibility at your campus, and instead check the override row.  In this way, you can selectively grant or revoke eligibility for specific programs at your campus.  This is known as an eligibility override.  Note that this does not affect a student's eligibility for jobs that are listed at other campuses.

If a date is entered into the "Override Expires On" field, the Override eligibility box and all program overrides will be cleared on that date.  If no date is entered, the override will remain in place until the system rolls over to the next semester's data.

Users with access level 5 are not permitted to grant eligibility overrides and are thus unable to alter the checkboxes or override expiration date.

{help-campus-data}

The next section lists detailed information about the student's eligibility at your campus.  Static (non-editable) fields marked with an asterisk * are editable only by the student.  All other static fields are pulled from Banner data during daily eligibility processing.  The Eligibility Comments box describes the student's eligibility, or lack thereof, including reasons for ineligibility for particular job programs.

Visa status is broken down into three separate values.  The first is the visa status as determined by the system, based on the other two visa fields (SEVIS and GOAINTL).  The GOAINTL visa status in Banner is managed by ISS.  Visa status is defined as follows:

* If SEVIS is defined, its value will be used for the visa status
* If SEVIS is blank, GOAINTL will be used
* If both SEVIS and GOAINTL are blank, then the visa status will be blank

## I-9, Exceptions, Enrollment, and Degrees

{help-i9-degrees}

The final section of the student eligibility screen contains the following:

* __Electronic I-9 information:__  The I-9 ID number of each electronic I-9 belonging to the student will be listed here, along with the expiration and extension dates, if any.  If the I-9 is currently finalized and unexpired, it will be listed as valid with a checkmark.
* __Staff note exceptions:__  The most recent exception of each type (GPA, Insufficient Credits, Payment Inactivity) will be listed here with additional relevant information.  Revoked exceptions will be struck through and note "Revoked."
* __Current Semester enrollment:__  This table lists the student's enrollment at campuses other than your own, if any.  Enrollment at your campus is listed in the previous section above.
* __Previous Semester enrollment:__  During Summer sessions, this table lists the previous Spring enrollment.  It is not updated during Fall and Spring semesters.
* __Next Semester enrollment:__ During Summer sessions, this table lists the upcoming Fall enrollment.  It is not updated during Fall and Spring semesters.
* __Degree/Certificate:__  All degrees and certificates earned at a UH campus are listed here, if any.

## FWS

{help-std-fws}

The FWS sub-tab lists the student's FWS awards by semester.  A full transaction detail is listed below.  If multiple FWS transactions exist for the same semester, the most recent transaction takes precedence for determining the student's award amount.

## Referrals

{help-std-ref}

The Referrals sub-tab lists all referrals that have been generated for the student.  A referral is generated when a student adds a job to their cart.  The Apply Date denotes when the student was added to the job's applicant list.

You may generate referrals for a student by entering the job number and pay code and pressing "Create Referral."  You may optionally add the student to the job's applicant list as well, in which case the student's name will appear on the applicant list that is visible to the employer.  If the student is not added to the applicant list, then the referral may only be used to create a hire from the admin side using the referral number.

## Documents

{help-std-docs}

The Documents sub-tab allows you to see the documents that the student has uploaded to the system, and how many jobs to which they are currently applied.  This is a read-only screen and documents may not be edited or deleted.

## Placements

{help-std-plc}

The Placements sub-tab lists all active and inactive placements for the student.  Placements do not appear in this list until the hiring document (SEWA, COOP or NONUH hire) was processed.  Press any row to view the detailed placement record (See [Placement Detail](#uh-placements)).  

The Monitoring Log contains date-stamped messages based on automated monitoring activity.  Events that may be logged include:

* Memo 1 sent
* Memo 2 sent
* Regained eligibility
* Terminated from employment
* Mandatory increment granted
* Medical plan offer sent

## Staff Notes

{help-std-note}

The Staff Notes sub-tab is only available to users with access level 3 or lower.  It allows you to view staff notes about this student by staff at your campus, as well as post new notes.  Press a row in the table to view a note in full, or press "Post New Note" to create a new staff note.

### Posting Staff Notes

When posting a staff note, you are required to enter the method of contact, check one or more services provided, and enter a description of the interaction.  You may also optionally enter a learning outcomes plan, and GPA or Insufficient Credits exceptions.  Once you have created a note, you may edit it for up to 24 hours, after which point it becomes an indelible record.  You can only edit notes that you have posted yourself.

Exceptions are used to prevent termination of a student's placement by the automated monitoring processes.  A granted GPA exception will prevent a student from being terminated due to insufficient GPA, while a granted Insufficient Credits exception will prevent termination due to insufficient enrollment, and a Payment Inactivity extension will prevent termination due to lack of recent payment activity on a particular placement.  All exceptions are campus-specific, and will only apply to placements in jobs at your campus.  In order to be valid, the exception must be entered as "Granted."  Pending and denied exceptions will not prevent termination by the system.

### Attachments

You may upload file attachments to any staff note that you have posted within the past 24 hours.  The maximum file size per attachment is 5MB.

## Form I-9

{help-std-i9}

The Form I-9 sub-tab shows the student's electronic forms I-9.  Press any row to view the form in its entirety and/or make any updates.  The I-9 will open in a separate tab by default.

You can also prepare a new I-9 for the student, which will allow you to enter the section 1 information that is normally entered by the student. See [Preparing a Form I-9](#preparing-a-form-i-9).

## Student Profile

{help-std-profile}

The Profile sub-tab allows you to view and modify the student's profile information.  Students have the ability to update most of their profile information on-demand, with the notable exception of the Social Security Number, which is only editable from the administrative side.

Note: Altering the Social Security Number on the profile will propagate the updated SSN to all active placements belonging to the student.

# Jobs

{help-job-main}

The Main Job Menu displays current statistics broken down by Part-Time(PT)/Full-Time(FT) and status, as well as highlighting jobs that have pending static data change requests (i.e. requests to change duties, qualifications, or pay rate for NONUH jobs).  Press any count in the statistics to see the list of matching jobs.

The search form allows you to locate jobs matching various criteria.  All users except for those with access levels 0 and 1 are limited to viewing jobs affiliated with their own campus.

Press any row in the search results to view the detailed job listing.

## Job Listing

The job listing shows the full job form, allowing you to view and update all data fields.  In addition, you have access to internal fields specific to SE administration.

{help-job-internalinfo}

* __Placement Form:__ For NONUH jobs, you can select a placement form (NONUH, INTERN, COOP, FULL TIME).  For UH and FWS jobs, UH Payroll is the only option
* __FWS Job Type:__ Allows you to designate a job as belonging to one of the special FWS job programs
* __Hide Referral Contact:__ If checked, students applying for the job will not be shown the names or contact information of the job contacts, but will instead be shown the text entered in the accompanying text box

## Referrals

{help-job-ref}

The Referrals sub-tab shows all referrals that have been generated for the job.  Students who have subsequently applied for the job will have their "Apply Date" listed, and those who were placed will have a "Yes" indicated in the "Placed" column.

You can generate a referral for a particular student by entering their UH Number.  You can then use the generated referral number to create a placement, or you can check the "Add to applicant list" option to have the student listed as an applicant for the job contact(s) to see in the applicant list.

## Applicants

All current applicants are listed in the Applicants sub-tab, along with documents that they have applied, if any.  Historical applicants are not shown on this screen, but rather in the Referrals sub-tab.  

Press any row to view information about the student, including I-9, SSN, and FWS award status, and whether or not they have acknowledged the GCN.  You can download applied documents, and initiate a SEWA by pressing the "Hire" button next to any applicant.

The applicants list is cleared each time a job is reopened.

## Placements

The Placements sub-tab lists all active, inactive, and processing placements for the job.  A placement in processing status indicates that the SEWA or other hiring transaction is still in process and has not been finalized.  Press any row to view the placement detail, including transactions.

## Contacts

The job contacts are listed on the Contacts sub-tab for reference.  All contacts who are listed by username in section 1 of the approvals section of the job listing are listed, along with their job title, departmental/company and contact information.  Press any contact's information to view their profile (See [Employer Jobs/Placements](#jobs-/-placements)).

## Skill Matches (UH and FWS jobs only)

This sub-tab contains a filterable list of students sorted by how many of the selected skills in their profile match the selected skills on the job form.  This is only available for on-campus job programs, since the off-campus programs do not list the skill checkboxes on the job listing.

# Employers

{help-emp-main}

The Main Employer Menu lists current counts of employer contact profiles in the system under Current Statistics.  Press any count to list all matching contacts below.

You can also register new UH or NONUH profiles using the links below the statistics.  In either case, you will be shown the appropriate registration form and asked to fill in the employer and contact information.  When registering NONUH employers, please be sure to note the random password shown on the registration form before you press "Submit," as the password will no longer be shown after that point.

The search form allows you to locate specific employer contact profiles according to the following criteria:

* __Campus:__ Unless you have access level 0 or 1, the campus will be pre-filled and locked to your own campus affiliation.  The search results will include all employers who selected this campus at registration, and NONUH employers who have listed at least one job at this campus, regardless of their registered campus affiliation.
* __Employer Type:__ Either UH or NONUH employers
* __Last Name:__ The last name of the employer, as entered on their profile 
* __First Name:__ The first name of the employer, as entered on their profile
* __Email Address:__ The email address that the employer used when registering their profile
* __Username:__ The username registered with their profile. For UH employers, this is the UH username on file. For NONUH employers, this is functionally the same as searching by email address
* __Employer / College / Division:__ For UH employers, this field represents the college or division.  For NONUH employers, it represents the company name
* __Company Type / Department:__ For UH employers, this field represents the department or office name.  For NONUH employers, it represents the company type
* __Status:__ Select from New, Active, or Inactive
* __Contact ID:__ Each profile is uniquely identified by a contact ID

## Jobs / Placements

All jobs and placements belonging to this employer are listed in the Jobs / Placements sub-tab.  A job being listed here means that this employer is listed under Section 1 approvals as a job contact, and thus has access to view and modify the job listing.  Placements listed here are placements for those same jobs.  Placements for which the employer is listed in Section 2 as a SEWA or placement transaction approver, but not in Section 1 as a job contact are not listed in the employer's profile.

For UH employers, you can add to any non-full job series using the "Add to Series" buttons in the job list.  For all employers, you can create new jobs and job series as well.

Press any job to view the full job listing.  Press any placement to view the placement detail, including placement transactions.

## Employer Profile

The profile sub-tab lists the full employer profile form, allowing you to view the information or make changes.  Additionally, there is a comments box for internal comments visible only to SE administrators.

On UH employer profiles, you can grant or remove placement access using the "Placement Access" checkbox.  Check or uncheck this box as needed and press "Submit" to process the update.

On NONUH employer profiles, you can reset the employer's password using the "Reset Password" checkbox by checking it and pressing "Submit" to process the update. This allows you to help NONUH employers who have lost their password and are unable to complete the self-service password reset process. After checking the "Reset Password" checkbox, a new password will be shown in a text box so that you can copy it and send it to the employer who requested the reset. Please be sure to copy the password before you navigate away from the profile page or you will need to reset the password again to a new one.

# Placements

{help-plc-main}

The Main Placements Menu displays statistics on current placement transactions awaiting approval, as well as general counts by status.  COOP transactions awaiting approval are listed separately at the bottom of the statistics table.  Press any count to view the list of matching transactions below.

Underneath the Current Statistics, you can initiate a new SEWA using a referral number.  Most hires will be processed from a job's applicant list, but if, for any reason, you need to process a hire for a student with a referral, but no application, you can do so here by entering the referral number and pressing "Hire."

Beneath that are a link to view Hawaii Information Portal (HIP) feed information, and the COOP placement management tools for users with access levels 3 and lower.  See [HIP Feed](#hip-feed) and [COOP Placements](#coop-placements) for more information.

Unlike the other menus, the placements menu has two distinct search forms, which you can toggle between using the tabs marked "Transactions" and "Placements."

The "Transactions" search allows you to locate placement transactions.

* __Last Name:__ The last name of the placed student.
* __First Name:__ The first name of the placed student.
* __UH Number:__ The UH number of the placed student.
* __Job Type:__ The job type will be one of: On-Campus, Off-Campus, or COOP.  This selection determines which transaction types you can search for.
* __HIP Position Number:__ The position number in HIP associated with the transaction's placement.
* __COOP Counselor (COOP job type only):__ This option only appears when you select COOP as the job type.  The COOP counselor that is assigned to the placement.
* __Transaction Type:__ The type of transaction.  Transaction types that are not used for the selected job type will be grayed out and disabled.
* __Transaction Status:__ The status of the transaction.

The "Placements" search allows you to locate placement records. 

* __Last Name:__ The last name of the placed student.
* __First Name:__ The first name of the placed student.
* __UH Number:__ The UH number of the placed student.
* __Employer / College / Division:__ The company name (if NONUH) or college / division (if UH) of the supervisor as listed on the job form.
* __Company Type / Department:__ The company type (if NONUH) or department / office (if UH) of the supervisor as listed on the job form. 
* __Placement Type:__ One of: UH, NONUH, or COOP. 
* __COOP Counselor (COOP only):__ This option only appears when you select COOP as the placement type.  The COOP counselor that is assigned to the placement.
* __Status:__ The current status of the placement. 
* __Payroll Number, Warrant Code, and Account Code (UH only):__ If specified, you can search for placements that currently have active accounts matching the specified payroll number, warrant code, and/or account code.  Only active placements that currently have matching accounts will be listed.

## UH Placements

{help-plc-detail}

A UH placement is a record of employment in an on-campus job.  When you view a placement from the placement search results, or from the student placements sub-tab, you will see the placement detail, along with drop-down menus to view historical transactions or create a new transaction.  If there is currently a transaction in progress on the placement, you will not be able to create a new transaction, and will instead see a drop-down menu to view the transaction in progress.

### Transactions

There are various placement transactions that are used to update placement information.

* __HIRE - Hire/Establish on UH Payroll:__ The HIRE transaction establishes the placement record, including student info, job info, pay rate, appointment period, and payroll accounts. When a hire transaction is created, the student being hired will be sent an email notification of medical/prescription drug plan offer and required to acknowledge receipt the next time they log in to ***sece***. If the student has existing active placements, the student information (name, address, citizenship, marital status) on those placements will be updated to match the information entered on the new hire transaction upon final approval.
* __Data Chg - Student Info:__ Update student information, such as SSN, name, address, citizenship, and marital status.  Note that if the student has multiple active UH placements, equivalent student info change transactions will be generated and processed by the system on the other active placements for consistency.
* __Data Chg - Appointment Period:__ Update the appointment period.  The maximum appointment period allowed by the system is one year.  If the appointment period lapses, but the student will continue working, an appointment period transaction should be created to extend the appointment period. 
* __Data Chg - FICA Code:__ Update the FICA code on the placement to "exempt" or "not exempt" status.  If the student has multiple active UH placements, the system will generate and process equivalent FICA change transactions for all other active placements once the initial FICA change transaction is finalized.  This is to ensure that all placements belonging to the student maintain the same FICA code.
* __Rate Chg - Step Increase (in same class):__ Move the placement to the next pay step within the same pay class (e.g. A21 to A22).  If a placement is already at the top step of the pay class, a step increase cannot be processed, and a promotion would need to be processed in order to increase pay further. 
* __Rate Chg - Promotion (in same series):__ Move the placement to a higher pay class in the job series.  There must be an existing job listing in the desired pay class. 
* __Rate Chg - Demotion (in same series):__ Move the placement to a lower pay class in the job series.  There must be an existing job listing in the desired pay class. 
* __Fund Chg - Add New Account Code:__ Add new account code(s) to the placement.
* __Fund Chg - Change/Terminate Account Code:__ Modify or terminate account code(s) on the placement.  Each active account will be listed on the transaction, allowing you to modify the account information, or terminate the account.  If all active accounts are terminated, the placement itself will be terminated and marked inactive.  Note that if there are pending timesheets on the placement, it cannot be terminated until all timesheets are processed or deleted.

Placement transactions go through an approval process according to the roles and order listed in Section 2 approvals on the job listing.  As each role approves a transaction, it moves to the next role in line until all necessary approvals are made.  For most transactions, the approval process ends once the FA has approved.  SEWAs are always forwarded for administrative approval after FA approval, as are step increases when the most recent pay raise occurred less than 6 months prior.  

If necessary, a role may be bypassed for approval by any subsequent role.  For example, a transaction that is waiting on Additional Approval 1 may be approved by the Fiscal Authority to expedite approval, or if Additional Approval 1 is unavailable.  Administrative users can bypass all approvals by selecting "FINAL" status on the placement transaction to process it on the spot.

### HIP Feed

HR data for student employees is sent to the Hawaii Information Portal (HIP) in a daily data feed. When a student is hired for the first time, their HIP Employee Self Service profile is established at the next feed of new hire data. Typically, the feed is run Monday-Friday evenings, but in addition to weekends and state holidays, there are three no-feed days every pay period.

{help-plc-hip}

The *HIP Feed Info* link on the Placements main screen will bring up the screen shown above. It will show the last time the HIP data feeds ran, the next time they are scheduled to run, and a list of no-feed dates for the rest of the current year. If you receive inquiries from students who are trying to access Employee Self Service, referencing this information against their hire date can help determine when they can expect to have their access established.

## COOP Placements

The Main Placements Menu includes tools for COOP placement management.

### COOP Reports

Reports are generated by the system on demand, and may be downloaded in Excel format.

* __COOP Placements:__ Reports of COOP placements by appointment period.  You can select from various time spans, including semesters, fiscal and calendar years, or any dates of your choosing.  Any placement whose appointment period overlaps the selected time span is included in the report.
* __COOP Earnings:__ Reports of calculated COOP earnings.  Earnings are calculated based on the hourly pay rate(s) and hours worked per week for all periods during the selected time span.
* __COOP Evaluations:__ Report of all active COOPs to be sent evaluations. 
* __Graduating/Completing Addresses:__ Report of all addresses of students whose COOP appointments are ending within the entered date span.

### COOP Evaluations
COOP evaluation emails to students and supervisors are sent by the system at the end of Fall, Spring, and Summer semesters for each placement that has been active for 8 weeks or more.  Each semester, the links to the evaluations for supervisors and students should be updated using the "COOP Evaluation Link" on the Main Placements Menu.

* Four weeks before the last day of finals, all COOP counselors with active COOP placements receive an email with their list of active COOP students due to be sent reminders at the end of the semester.  This serves as a reminder to update the evaluation links and exempt any desired students from their list to prevent the system sending them an evaluation email.
* Two weeks before the last day of finals, the evaluation emails will be sent, provided the evaluation links have been entered for the current semester.  If the evaluation links are entered after this date, but before the end of the semester, the emails will be sent as soon as the evaluation links are entered.  If the evaluation links are not entered prior to the end of the semester, evaluation emails will need to be sent manually.  The COOP Evaluations report can be used to generate a spreadsheet of students/supervisors to be emailed manually.

### Placement Record and Transactions

{help-plc-cooprec}

The placement record contains student, job, and supervisor information.  From here, you can also manage work periods and placement transactions.  To prevent a student and their supervisor from being sent evaluation emails by the system at the end of the current semester, simply check the "Do Not Send Evaluations" box.  The "Do Not Send Evaluations" box is cleared every semester, so make sure you check back in subsequent semesters if you still wish to prevent evaluations from being sent.

{help-plc-coop-periods}

Work periods define when the student has actively worked.  The COOP earnings report uses work periods to calculate the student's earnings.  When adding a new work period, simply enter the start and end dates, and the hours worked per week.

A COOP placement record is established with a COOP hire transaction.  An active placement can also be updated with the following additional transactions:

* __COOPD - COOP Data Change:__ Updates basic data on the placement, including the counselor, supervisor, and whether the COOP is on a parallel or alternating plan.  Any fields that are left blank on the transaction will leave the existing value unchanged.
* __COOPA - COOP Appointment Period Change:__ Updates the appointment period.  This is generally useful if the appointment period needs to be extended beyond the original end date.
* __COOPP - COOP Pay Rate Change:__ Updates the hourly pay rate according to the entered effective date.  COOP earnings reports will factor in all pay rate changes effective during the reporting period. 
* __COOPT - COOP Placement Termination:__ Once the appointment has ended, process a placement termination transaction to mark the COOP as inactive and record the final termination date.

Once you set a transaction to FINAL status, it can no longer be edited as it is processed by the system, updating the placement record as necessary.

## NONUH Placements

NONUH placements consist of a single hiring record noting the appointment period, hours per week, and pay rate.  They are intended for records-keeping purposes and are not managed transactionally like UH and COOP placements.

# Form I-9

The Main I-9 Menu displays current statistics of forms in the system, broken down by status.  Press any count to view the list of matching forms below.

The search form allows you to filter by various data fields on the Form I-9.  Note that all search fields with the exception of UH number (e.g. names, date of birth) correspond to the data as entered on the Form I-9, which may or may not exactly match the same data on the student's ***sece*** profile.

## Preparing a Form I-9

If a student is unable to complete Section 1 of the Form I-9 on their own, you may act as preparer and complete Section 1 for them.  You can begin the process by entering the student's UH number on the Main I-9 Menu, or by utilizing the "Prepare a New Form I-9" button on the student's I-9 sub-tab.  Once you have filled out Section 1, you also must complete the Preparer / Translator Certification section.  Prepared Forms I-9 are returned to the student by default, because the student must sign Section 1 before the form may be finalized.

## Form I-9 Retention

In accordance with federal regulations, Forms I-9 in the system are stored until the later of 3 years from hire, or 1 year from termination have elapsed.  At that point, the I-9 is purged and no record of it is kept in the system.  

Additionally, to maintain tidy records and prevent the storage unnecessarily-created forms, all Forms I-9 belonging to students with no active placements that remain in pending, new, or returned status for two months without further activity are also purged.  If you need to retain a Form I-9 going through approval for more than two months, it is recommended that you place it in "Hold" status.

# Recruitment

{help-ocr-main}

The Main On-Campus Recruitment Menu lists stats of all OCR requests at your campus, broken down by type and status.  Press any count to view the list of matching requests below.

The search form allows you to locate specific requests.

* __Last Name:__ The last name of the employer who made the request, as entered on their profile. 
* __First Name:__ The first name of the employer who made the request, as entered on their profile.
* __Company:__ The company name of the employer who made the request, as entered on their profile.
* __From, To:__ Specifies a date range to filter.  This date range is checked against the preferred date entered on the request.
* __Type:__ The request type (On-Campus Interviews, Information Session, or Information Table).
* __Status:__ The current status of the request.
* __No-Show:__ Whether or not the request was marked as a no-show.
* __Parking Requested :__ Whether or not the request included a parking request. 

## OCR Coordinator

Users with access level 2 or lower can edit the OCR Coordinator at their campus using the link below the current statistics on the main menu.  The OCR Coordinator is the main contact point for OCR, and will receive email inquiries sent by employers within the employers' OCR module.  

## Request Administration

{help-ocr-internal}

In addition to the employer-entered fields on each type of OCR request, there is a section for internal info visible only to SE administrators.

* __Location:__ Once a location for the event is confirmed, you can enter it here.  The employer will be shown the location as entered here when they view their request in the system.  Information table requests will additionally have a Table Location field.
* __Employer No-Show:__ Allows you to mark an event for which the employer was a no-show.
* __Participant Count:__ For recording the number of participants/attendees.
* __Internal Comments:__ Internal comments that will only be visible on the admin-side view of the request.
* __Status:__ Determines where in the workflow the request currently resides.  Employers can only make edits to requests that are in Pending status. 

## Interview Participant List

{help-ocr-participants}

On-Campus Interview requests also keep participant lists that you can view and manage with the "View/Edit Participant List" link.  All participants that were previously entered are listed in the table at the top of the screen.  You may delete a participant at any time using the "Delete" button, or edit the participant's information by pressing its table row.

{help-ocr-participant-edit}

When adding a new participant, you can either enter the student's UH number, if available, or you can enter a first name, last name, and email address for interviewees without a UH number.  Enter the date of the interview, and use the "Hired" checkbox to note whether the interviewee was hired as a result of the interview.

When editing an existing participant, the form will be populated with the interviewee's current information, allowing you to make changes as needed.

# Staff Notes

{help-notes-main}

The Main Staff Notes Menu displays current statistics of the number of notes posted at your campus, broken down by method of contact.  Underneath that, you can view the monitoring schedule, which lists upcoming monitoring tasks in chronological order.  

The search form allows you to filter notes by various student data, and information entered on notes.  Press any row in the search results to view the note in full on the student Staff Notes sub-tab.  See [Student Staff Notes sub-tab](#staff-notes) for more information.

# Settings

The settings menu includes various administrative tools for management and configuration of the system, as well as general reports that can be run on-demand.  Your access level determines which options are available to you.  Options that you do not have sufficient access to view will be listed, but not linked.

## Manage Administrative Staff Access

This screen lists all administrative users that you are authorized to edit, and provides a button for you to add new users.  You may view, edit, and add users with access levels greater than your own, so a user with access level 3 can view, edit, and add users with access levels 4-7.

## Manage Email Notifications

{help-notification}

Users with access level 2 and lower can set up email notifications for jobs and/or placement transactions awaiting administrative approval at their campus.

* __Description:__ A brief description to help you identify this emailer. 
* __Type:__ Select one of new job or new placement transaction notification.
* __Recipient Email Address:__ Enter at least one email address that should be sent notifications.  Email addresses do not need to be registered as employers or administrators in the system.
* __Email Frequency:__ Emails can be sent daily, weekly, or biweekly.
* __Email if Zero Records:__ If checked, you will be sent a notification even if there are no new jobs/transactions awaiting approval. If not, you will only receive an email when there are new jobs/transactions.
* __Campus:__ Select the campus for which new jobs/transactions will be monitored.  Users with access level 2 will have this field locked to their own campus. 

## Links Available on Student Menu / Employer Screens

{help-link-manager}

Users with access level 3 and lower can edit the links that are listed on the student main menu, which students see upon signing in, and the employer Forms and Info screen. Press any row to edit a link.

The Link ID uniquely identifies each link, and is not displayed on the screen where the link itself is shown.  The Display Name is the linked text, as it will appear.  The Page/Location determines whether the link is shown on the student main menu or the employer Forms and Info screen.  The section determines which section of links each will be grouped into.  The Order# determines the order that the links will be listed on the screen.

## Social Media Accounts

{help-social}

Users with access level 2 and lower can edit the social media accounts at their campus to setup social widgets to be shown on the student main menu.  Widgets will be shown on the main menu for students whose primary campus affiliation matches your own.  You may enter a Facebook account, a Twitter account, or both.  

To display a widget, enter the username in the applicable box, check the "Enabled" box, and press "Update."  You should then see a preview of the social widget.  If you do not check the "Enabled" box, the username will be saved, but no widget will be shown to students at your campus.

## Monitoring Tools and Reports

Users with access level 3 and lower can view the monitoring tools and reports screen. Here, you will see monthly reports that can be generated into Excel format, along with two semesterly reports.  

You can also view the automated monitoring schedule, and view lists of students who have been flagged as ineligible by the automated monitoring process.  See [Automated Monitoring](#automated-monitoring) for more information about the monitoring process.

The other Automated Monitoring options schedule and run monitoring-related tasks and are restricted to users with access level 0 only.

## Reporting Utility

The Reporting Utility allows you to generate lists of students in Excel format from current semester enrollment data in ODS.  The filtering criteria for reports are:

* __Campus:__ For users with access level 2 or higher, this will be locked to your own campus.  The campus represents the enrolled campus, but not necessarily the student's primary campus.  For instance, a report run at campus UH Hilo would include students who are Hawaii CC primary campus, but taking classes at UH Hilo.
* __Min Credits, Max Credits:__ Set a range of minimum and maximum total credits.  Specify only a minimum to return students with at least that many credits.  Specify only a maximum to return students with at most that many credits.  Specify both to return students with credits in the entered range. 
* __Min GPA, Max GPA:__ Set a range of minimum and maximum cumulative GPA.  You may specify a minimum, a maximum, or both, much like the credits range described above. 
* __Major(s):__ Select one or more majors.  The list of available majors is populated based on the current enrollment data in ODS.  If a major is not listed, it means that no students are currently enrolled with that major.  
* __Search by both primary and secondary major:__ If checked, results will include students who have a matching primary or secondary major. Otherwise, only primary major will be searched.
* __Class Standing(s):__ Select one or more class standings.
* __Include alumni:__ If checked, alumni not currently enrolled will be included in results, with their enrollment data based on their most recent semester attended.
* __Require email address:__ If checked, students with no email address on file will be omitted from results. 
* __Include unsubscribed emails:__ If checked, students who have unsubscribed from mass emails at your campus will be included in the results.   By default, unsubscribed students will not appear in any reports.  
* __Min, Max Grad Date:__ Set a range of minimum and maximum grad date.  The grad date is checked against the student-reported grad date that is stored in Banner.

## Add/Edit Employer & Department Data

This option is available to users with access level 3 or lower and allows you to manage the UH and NONUH employer and department lists at your campus.  After selecting which type of employer/department you want to edit, you will see the full list from your campus.  Press any row to make edits.

Upon submitting edits, the employer or department will be set to "Active" status automatically.  You can also replace an employer/department with another to merge all contact profiles under the replaced employer/department with the new employer/department, and delete the replaced one.  To do so, simply view the employer/department you wish to replace, then use the "Change Employer/Department To" drop-down menu to find the employer/department that will be used instead.

## Data by Campus

Users with access level 3 or lower can select job categories, FWS types, skills, and staff note services that are available at their campus.  

### Job Categories

The full list of job categories available system-wide is listed, broken down by UH and NONUH categories.  The categories that are checked will be made available for employers to choose from when creating job listings affiliated with your campus.

### FWS Types

The FWS types checked on this screen will be made available to choose from on the administrative side job listing, under internal information.

### Job Skills

The full list of job skills available system-wide is listed.  The skills that are checked will be made available for students to choose from when registering or updating their profiles.  The same checked skills will also be available to UH employers when listing jobs affiliated with your campus.

### Staff Services

The services that are checked will be made available to choose from when staff at your campus post staff notes.

## Automated Monitoring

The automated monitoring system is a set of tasks that are meant to grant mandatory step increases to eligible students, and find actively placed students who are no longer eligible to work, notify them of their ineligibility, and then terminate their placements.  Below is a description of each aspect of the automated monitoring system. 

In each case, with the exception of I-9 expiration, the "final pay date" is defined as the pay date that corresponds to the pay period in which memo 1 was sent.

If any student is flagged as ineligible when the system sends out memo 1, but is no longer flagged on subsequent checks for memo 2 and before termination, they will be automatically taken off the ineligible list and notified that they are now eligible.

Students who are not flagged as ineligible at the memo 1 sending date, but are flagged on subsequent checks for memo 2 and before termination will not be added to the list of students to be terminated in the automatic process.  Instead, they will be listed for manual handling at the "View Ineligible Students" option under "Settings>File Maintenance>Monitoring Tools and Reports>Automated Monitoring"

Select which list of ineligible students you wish to view, and students going through the automated process will be listed first, with those who require manual handling listed below.

{help-monitoring-post-memo1}

### Pre-Memo

* Notifies all actively placed students that a monitoring audit will occur
* Interval: Semesterly (Spring, Summer, Fall)
* Timeline: In Spring and Fall semesters, the pre-memo will be sent on the first day of the semester.  In Summer, it will be sent one week prior to memo 1 of the Not Continuing process.

### GPA

* Checks for students with unsatisfactory GPA (Undergrads < 2.0, Graduates < 3.0).
* Interval: Semesterly (Spring, Summer, Fall)
* Timeline: Memo 1 sent 2 weeks after semester start date.  Memo 2 sent 1 week prior to final pay date.  Termination initiated 1 week after final pay date.
* Exceptions:
    * UH eligibility overrides given using the “UH” checkbox on the student eligibility screen will prevent a student from being sent memos or terminated from employment.
    * GPA exceptions granted for a particular student through staff notes will remove the student from the list of ineligible students.  No further memos will be sent to the student, and terminations will not be initiated.  Please note that the exception must be granted to have any effect.  Pending exceptions will not restore eligibility.
* Note: If there is a pending transaction on the student's placement, it will be automatically deleted to allow for the creation of the termination transaction.

### No Enrollment/Insufficient Credits

* Checks for students not enrolled, or enrolled less than half time (6 credits for undergraduates, 4 credits for graduates)  at their primary institution, and international students enrolled less than full-time (12 credits for undergraduates, 6 credits for graduates).
* Interval: Semesterly (Spring, Fall)
*  Timeline: Memo 1 sent 2 weeks after semester start date.  Memo 2 sent 1 week prior to final pay date.  Termination initiated 1 week after final pay date.
*  Exceptions: 
    * UH eligibility overrides given using the “UH” checkbox on the student eligibility screen will prevent a student from being sent memos or terminated from employment.
    * Insufficient credits exceptions granted for a particular student through staff notes will remove the student from the list of ineligible students.  No further memos will be sent to the student, and terminations will not be initiated.  Please note that the exception must be granted to have any effect.  Pending exceptions will not restore eligibility.
* Note: If there is a pending transaction on the student's placement, it will be automatically deleted to allow for the creation of the termination transaction.

### Not Continuing
* Checks for students not enrolled for the summer session and enrolled less than half time at their primary institution in the fall semester, and international students enrolled less than full-time in the fall semester.
* Interval: Summer, manually initiated
* Timeline: Memo 1 sent one week after summer pre-memo is initiated by Student Employment staff.  Memo 2 sent 1 week prior to final pay date.  Termination initiated 1 week after final pay date.
* Exceptions: 
    * UH eligibility overrides given using the “UH” checkbox on the student eligibility screen will prevent a student from being sent memos or terminated from employment. 
    * Insufficient credits exceptions granted for a particular student through staff notes will remove the student from the list of ineligible students.  No further memos will be sent to the student, and terminations will not be initiated.  Please note that the exception must be granted to have any effect.  Pending exceptions will not restore eligibility.
* Note: If there is a pending transaction on the student's placement, it will be automatically deleted to allow for the creation of the termination transaction.

### Graduation
* Checks for students who have petitioned for, or have been awarded a degree for the most recent Spring semester, and have no enrollment in the Summer or upcoming Fall semesters.
* Interval: Summer, shortly after Spring commencement
* Timeline: Memo 1 sent May 16th, or 2 days after commencement, whichever is later. Memo 2 sent 1 week prior to final pay date.  Termination initiated 1 week after final pay date.
* Exceptions: 
    * UH eligibility overrides given using the “UH” checkbox on the student eligibility screen will prevent a student from being sent memos or terminated from employment. 
    * Insufficient credits exceptions granted for a particular student through staff notes will remove the student from the list of ineligible students.  No further memos will be sent to the student, and terminations will not be initiated.  Please note that the exception must be granted to have any effect.  Pending exceptions will not restore eligibility.
* Note: If there is a pending transaction on the student's placement, it will be automatically deleted to allow for the creation of the termination transaction.

### I-9 Expiration
* Checks for student employees with active placements with an expired I-9.  Flags students with either a paper or electronic Form I-9 that has expired.
* Interval: Monthly
* Timeline: Memo 1 is sent on the first of each month to students whose I-9 will expire within the next 2 months (e.g. A memo sent on March 1st will encompass I-9s that expire before May 1st).  Memo 2 is sent 1 week prior to the student's final pay date, which is the pay date for the pay period that includes their I-9 expiration date. Terminations initiated 1 week after final pay date (2 weeks after memo 2).
* Note: If there is a pending transaction on the student's placement, it will be automatically deleted to allow for the creation of the termination transaction.

### Mandatory Increment

* Checks for students that are due a mandatory step increase and automatically grants it.
* Interval: Weekly
* Timeline: Each week, the system will check for eligible students and attempt to create step increase transactions.  If there is a pending transaction for a student's placement that is not for termination, the supervisor will be notified through email and asked to take action within one week, or the transaction will be deleted to allow the step increase to proceed.
* Follow-up
* Runs a sweep of on-hold terminations previously generated by monitoring processes and finalizes those that no longer have pending timesheets.  Sends a reminder email to the studempl-l listserv to follow-up on remaining held terminations.
* Interval: Fall and Spring, November 1st and April 1st

### Payment Inactivity

* Checks for active placements that have not had any payments processed for pay dates within the past 4 months, notifies student, supervisor, and FA/backup FA, then terminates the placement one month later. If a payment is processed for the placement for a pay date after the initial notice, the placement is not terminated, and a notice of new payment activity is sent to the student, supervisor, and FA/backup FA. Terminations initiated by this process will be finalized regardless of the existence of pending timesheets.
* Interval: Per pay period (7th and 24th of each month)
* Timeline: Memo 1 is sent when placement is initially identified as not having a pay date within 4 months. Memo 2 is sent one month later. Terminations occur one week after memo 2 is sent. 
* Exceptions: Payment inactivity extensions granted via staff notes will prevent further notices and terminations from this process as long as they remain unexpired. If an extension is granted and expires without a new payment being processed for the placement in question, then a new memo 1 will be sent at the next run of the process, with memo 2 and termination following 1 month later.

### Fall Mass FICA

* Rolls over eligible student employees to exempt FICA status during the Fall semester, and sends email notifications to supervisors of students who may not be exempt. This process determines FICA status according to the [FICA flowchart](https://www.hawaii.edu/sece/forms/FICA-Questionnaire.pdf). Note that the system cannot check point 1 (career employee, medical resident, or medical intern), so this is ignored.  
* Additionally, the determination of whether or not a student is in their final semester based on the user-provided expected grad date is not necessarily reliable. Thus, students who are not determined to be exempt from FICA tax will not be automatically changed to "not exempt" status, but an email will be sent to the supervisor on record indicating that the student's FICA status was not updated and providing a reason. Supervisors will be asked to log in and process a FICA change transaction if the student's FICA status needs updating.
* Interval: Annual
* Timeline: The process will execute the day after the student timesheet deadline of the pay period that includes the first day of the Fall semester.  This is to allow ample time for the final timesheets of Summer to be processed prior to any FICA changes.